const express = require('express');
const tokenExtractor = require('../middlewares/tokenExtractor')
const {getPdfs, createPdf, getMyPdfs,assignPDFtoStudents} =  require('../controllers/pdfController')

const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const pdfRouter = express.Router();

pdfRouter.get('/pdf', getPdfs);
pdfRouter.patch('/pdf/:id/assign', tokenExtractor, assignPDFtoStudents);
pdfRouter.post('/pdf', tokenExtractor, upload.single('file'), createPdf);
pdfRouter.get('/pdf/me', tokenExtractor, getMyPdfs)
module.exports = pdfRouter;