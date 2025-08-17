const express = require('express')
const pdfRouter = require('./controllers/pdf')
const cors = require('cors')

const app = express()

app.use(cors({
  origin: "http://localhost:5173",  // allow requests from your React app
  methods: ["GET", "POST", "PUT", "DELETE"], // adjust as needed
  credentials: true
}));


app.use('/api/pdf', pdfRouter)

module.exports = app