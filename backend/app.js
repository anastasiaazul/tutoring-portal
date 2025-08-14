const express = require('express')
const pdfRouter = require('./controllers/pdf')

const app = express()

app.use('/api/pdf', pdfRouter)

module.exports = app