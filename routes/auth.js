const express = require('express')
const routes = express.Router()
const { signUp,signIn } = require('../controller/auth')
const {checkDuplicateUsernameAndEmail, checkRoles} = require('../middleware')

routes.post('/eComm/api/v1/auth/signUp',[checkDuplicateUsernameAndEmail,checkRoles], signUp)


routes.post('/eComm/api/v1/auth/signIn',signIn)


module.exports = {AuthRoutes : routes}