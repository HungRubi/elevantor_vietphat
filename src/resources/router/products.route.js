const express = require('express');
const route = express.Router();
const productsController = require('../controller/products.controller');

route.get('/detail/:slug', productsController.detail);
route.get('/:slug', productsController.getCategory);
route.get('/', productsController.index);

module.exports = route;