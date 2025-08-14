const pdfRouter = require('express').Router()
const multer = require('multer')
const fs = require('fs')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
const upload = multer({storage})


pdfRouter.get('/', (request, response) => {
    response.send("<h1>This is the pdf route </h1>")
})

//CREATE

//READ

//UPLOAD
pdfRouter.post('/upload', upload.single('file'), (request, response) => {
    const uploadedFile = request.file
    console.log('file type', uploadedFile.mimetype)
})

//DESTROY


module.exports = pdfRouter