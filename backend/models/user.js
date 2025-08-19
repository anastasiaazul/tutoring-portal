const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
    type: String,
    required: true,
    unique: true // this ensures the uniqueness of username
  },
    name: String,
    passwordHash: String,
    role: {
      type: 'String',
      enum: ['tutor', 'student'],
      required: true
    },
    pdfs : [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PDF'
        }
    ]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    // the passwordHash should not be revealed
    delete returnedObject.passwordHash
  }
})

const User = mongoose.model('User', userSchema)

module.exports = User