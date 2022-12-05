const {checkNameForCategory}=require("./category")
const {validateProductData}= require('./product')
const {checkDuplicateUsernameAndEmail,checkRoles,isAdmin}  = require('./user')
const {verifyToken} = require('./authjwt')



module.exports ={
    checkNameForCategory,
    validateProductData,
    checkDuplicateUsernameAndEmail,
    checkRoles, 
    verifyToken,
    isAdmin
}