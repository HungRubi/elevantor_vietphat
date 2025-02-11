const express = require('express');
const route = express.Router();

const accountController = require('../controller/login.controller');

route.get('/', accountController.index);

module.exports = route;