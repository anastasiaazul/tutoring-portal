const express = require('express')
const pdfRouter = require('./routes/pdfRoutes')
const userRouter = require('./routes/userRoutes')
const cors = require('cors')
const loginRouter = require('./routes/loginRoutes')

const app = express()

app.use(cors({
  origin: "http://localhost:5173",  // allow requests from your React app
  methods: ["GET", "POST", "PUT", "DELETE"], // adjust as needed
  credentials: true
}));


app.use(express.json());
app.use('/api', pdfRouter)
app.use('/api', userRouter)
app.use('/api', loginRouter)


module.exports = app