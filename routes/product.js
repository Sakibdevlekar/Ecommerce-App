const express = require('express')
const {validateProductData,verifyToken,isAdmin}= require('../middleware')
const {createProduct,getAllProduct,getProductOnId,updateProduct,deleteProduct,getProductByName,filterBasedOnProduct} = require('../controller/product')



const  routes = express.Router()

routes.post('/eComm/api/v1/createProducts',[validateProductData,verifyToken,isAdmin], createProduct)

routes.get('/eComm/api/v1/Products',getAllProduct)

routes.get('/eComm/api/v1/Products/filter',filterBasedOnProduct)

routes.get('/eComm/api/v1/Products/:id', getProductOnId)

routes.get('/eComm/api/v1/ProductsByName/:name',getProductByName)

routes.put('/eComm/api/v1/Products/:id',[verifyToken,isAdmin],updateProduct)

routes.delete('/eComm/api/v1/Products/:id',[verifyToken,isAdmin], deleteProduct)

module.exports ={ProductRoutes: routes} 