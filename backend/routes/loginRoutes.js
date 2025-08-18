const express = require('express')

const loginRouter = express.Router();
const {checkLogin} = require('../controllers/loginController')

loginRouter.post('/login', checkLogin)

module.exports = loginRouter;