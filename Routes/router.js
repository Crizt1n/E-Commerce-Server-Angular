const express = require('express')
const productsController = require('../Controller/productsController')

const usersController = require('../Controller/usersController')

const router = new express.Router()

//get all products
router.get('/allproducts', productsController.getaAllProductsController)

//register
router.post('/register',usersController.registerController)

//login
router.post('/login', usersController.loginController)

module.exports = router