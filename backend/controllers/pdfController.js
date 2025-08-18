
const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')
require('dotenv').config();

const {randomImageName} = require('../utils/random')
const PDF = require('../models/pdf')
const User = require('../models/user');
const { request } = require('express');


const bucketName = process.env.BUCKET_NAME 
const bucketRegion = process.env.BUCKET_REGION
const accessKey = process.env.AWS_ACCESS_KEY_ID
const secretAcccessKey = process.env.AWS_SECRET_ACCESS_KEY

const s3 = new S3Client({
    credentials: {
        accessKeyId: accessKey,
        secretAccessKey: secretAcccessKey
    },
    region: bucketRegion
})

//READ
exports.getPdfs = async (request, response) => {
    const pdfs = await PDF.find().populate('assignedTo').lean()
    
    for (let pdf of pdfs)
    {
        const params = {
            Bucket: bucketName,
            Key: pdf.uniqueIdentifier
        }
        const command = new GetObjectCommand(params);
        const url = await (getSignedUrl(s3, command, {expiresIn: 3600}))
        pdf.imageUrl = url
    }
    response.send(pdfs)
};

//READ MY PDFS
exports.getMyPdfs = async(request, response) => {
    const user = request.user;

    if (!user || user.role !== "student")
    {
        return response.status(403).json(error, "Only students can access PDFS")
    }
        // PDFs where this student is assigned
        const pdfs = await PDF.find({ assignedTo: user._id }).lean();

        for (const pdf of pdfs) {
            const params = { Bucket: bucketName, Key: pdf.uniqueIdentifier };
            const command = new GetObjectCommand(params);
            pdf.signedUrl = await getSignedUrl(s3, command, { expiresIn: 3600 }); // 1 hour
        }
        response.json(pdfs)
    
}

//UPLOAD
exports.createPdf = async (request, response) => {
    const user = request.user

    if (!user || user.role !== 'tutor'){
        return response.status(400).json({error: 'user missing or not valid'})
    }
    const uniqueIdentifier = randomImageName()
    params = {
        Bucket: bucketName,
        Key: uniqueIdentifier,
        Body: request.file.buffer,
        ContentType: request.file.mimetype
    }
    const command = new PutObjectCommand(params)
    await s3.send(command)

    const pdf = new PDF({
        fileName: request.file.originalname,
        uniqueIdentifier: uniqueIdentifier,
        uploadedBy: user._id
    })

    const savedPDF = await pdf.save()
    user.pdfs = user.pdfs.concat(savedPDF._id)
    await user.save()

    response.status(201).json(savedPDF)
}

//ASSIGN
exports.assignPDFtoStudents = async (request, res) => {
    const user = request.user;
    const pdfId = request.params.id;

    let { studentIds } = request.body;

    if (!user || user.role !== 'tutor') {
        return res.status(403).json({ error: 'Only tutors can assign PDFs' });
    }

    if (!Array.isArray(studentIds)) {
        studentIds = [studentIds]; // support single ID as string
    } 
    const pdf = await PDF.findById(pdfId);

    if (!pdf) {
    return res.status(404).json({ error: 'PDF not found' });
    }

    if (!pdf.uploadedBy.equals(user._id)) {
        return res.status(403).json({ error: 'You do not have permission to assign this PDF' });
    }

    // Validate that all student IDs are valid and refer to students
    const validStudents = await User.find({
        _id: { $in: studentIds },
        role: 'student',
    });

    if (validStudents.length !== studentIds.length) {
        return res.status(400).json({ error: 'Some student IDs are invalid or not students' });
    }

    // Optional: prevent duplicates
    const existing = new Set(pdf.assignedTo.map(id => id.toString()));
    const newAssignments = studentIds.filter(id => !existing.has(id));

    pdf.assignedTo = pdf.assignedTo.concat(newAssignments);
    await pdf.save();

    res.status(200).json({ message: 'PDF assigned to students', assignedTo: pdf.assignedTo });
};


