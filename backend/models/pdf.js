const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI

mongoose.connect(url).then(result => {
    console.log('connected to MongoDB')
})

const pdfSchema = new mongoose.Schema({
    uniqueIdentifier: String,
    fileName: String,
    assignedTo : [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }],
    uploadedBy : {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
})

pdfSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('PDF', pdfSchema)