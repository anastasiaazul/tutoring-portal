const express = require('express');
const pdfRouter = express.Router();
const multer = require('multer');

const { S3Client, PutObjectCommand, GetObjectCommand } = require('@aws-sdk/client-s3');
const { getSignedUrl } = require('@aws-sdk/s3-request-presigner')

require('dotenv').config();
const storage = multer.memoryStorage();
const {randomImageName} = require('../utils/random')
const upload = multer({ storage });
const PDF = require('../models/pdf')

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
pdfRouter.get('/', (request, response) => {
    
})

//READ
pdfRouter.get('/pdfs', async (request, response) => {
    const pdfs = await PDF.find().lean()
    
    for (let pdf of pdfs)
    {
        const params = {
            Bucket: bucketName,
            Key: pdf.fileName
        }
        const command = new GetObjectCommand(params);
        const url = await (getSignedUrl(s3, command, {expiresIn: 3600}))
        pdf.imageUrl = url
    }
    response.send(pdfs)
})

//UPLOAD
pdfRouter.post('/upload', upload.single('file'), async (request, response) => {
    const imageName = randomImageName()
    params = {
        Bucket: bucketName,
        Key: imageName,
        Body: request.file.buffer,
        ContentType: request.file.mimetype
    }
    const command = new PutObjectCommand(params)
    await s3.send(command)

    const pdf = new PDF({
        fileName: imageName
    })
    pdf.save()


    response.send(pdf)
})

//DESTROY
pdfRouter.delete('/delete', async (request, response) => {

})


module.exports = pdfRouter