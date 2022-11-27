const express = require('express')
const {checkNameForCategory,verifyToken,isAdmin}=  require('../middleware')
const {createCategory, getAllCategory,getCategoryByName,getCategoryOnId, updateCategory, deleteCategory} = require('../controller/category')

const routes = express.Router()


routes.post('/eComm/api/v1/createCategories',[checkNameForCategory,verifyToken,isAdmin], createCategory)

routes.get('/eComm/api/v1/Categories', getAllCategory)

routes.get('/eComm/api/v1/CategoriesByName/:name',getCategoryByName)

routes.get('/eComm/api/v1/categories/:id', getCategoryOnId)

routes.put('/eComm/api/v1/categories/:id',[verifyToken,isAdmin], updateCategory)

routes.delete('/eComm/api/v1/categories/:id',[verifyToken,isAdmin], deleteCategory)

module.exports = {CategoryRoutes :routes}