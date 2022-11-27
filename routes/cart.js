const express = require('express')
const routes = express.Router()
const { updateCart,getCart } = require('../controller/cart')
const {verifyToken} = require('../middleware')


routes.put('/eComm/api/v1/cart/:id',[verifyToken],updateCart)


routes.get('/eComm/api/v1/cart/',[verifyToken],getCart)




module.exports = {cartRoutes : routes}