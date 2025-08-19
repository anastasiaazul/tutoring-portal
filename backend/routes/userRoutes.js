const express = require('express');

const {createUser, getAllUsers} =  require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users', createUser);

module.exports = userRouter;