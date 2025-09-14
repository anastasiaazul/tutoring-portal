const express = require('express');

const {createUser, getAllUsers, getAllStudents} =  require('../controllers/userController');

const userRouter = express.Router();

userRouter.get('/users', getAllUsers);
userRouter.post('/users', createUser);
userRouter.get('/students', getAllStudents);

module.exports = userRouter;