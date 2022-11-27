const express = require('express')
const {CategoryRoutes,ProductRoutes,AuthRoutes,cartRoutes} = require('../routes')



const app = express()

app.use(express.json())

app.use(CategoryRoutes)
app.use(ProductRoutes)
app.use(AuthRoutes)
app.use(cartRoutes)


module.exports={app}

