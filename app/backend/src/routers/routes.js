const express = require('express');
const getUsers = require('../controllers/getUser');

const userRouter = express.Router();

userRouter.get('/', getUsers);

module.exports = {
  userRouter,
};
