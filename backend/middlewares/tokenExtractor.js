const jwt = require('jsonwebtoken')
const User = require('../models/user')

const tokenExtractor = async (request, response, next) => {
  const auth = request.get('authorization')
  if (auth && auth.startsWith('Bearer ')) {
    try {
      const token = auth.replace('Bearer ', '')
      const decodedToken = jwt.verify(token, process.env.SECRET)
      request.user = await User.findById(decodedToken.id)
    } catch (err) {
      return response.status(401).json({ error: 'token invalid' })
    }
  } else {
    return response.status(401).json({ error: 'token missing' })
  }
  next()
}

module.exports = tokenExtractor
