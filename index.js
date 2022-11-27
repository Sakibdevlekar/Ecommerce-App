const {serverPort} = require('./config/server.config')
const { Categories,products,Role, sequelize } = require('./Models')
const {CategoryRoutes,ProductRoutes,AuthRoutes,cartRoutes} = require('./routes')
const express = require('express')


const app = express()

app.use(express.json())

app.use(CategoryRoutes)
app.use(ProductRoutes)
app.use(AuthRoutes)
app.use(cartRoutes)



app.listen(serverPort, async ()=> {
	console.log('server is running on this port', serverPort)
	await init()
})

async function init(){
	try{
		await sequelize.sync({force:true})  //sync all model in db (For individual model syncing we use =>  await category.sync({force:true}) ) every time it clear the db   
		//await sequelize.authenticate() // it just check for data & keep pervious data 
	
		const defaultCategories = [
		{
			name : 'Beauty',
			description: 'All Beauty products'
		},
		{ 
			name: 'Clothes',
			description: 'All Clothing products'
		},
		
		{
			name: 'Footwear',
			description: 'All Footwear products'
		}
		]

		const defaultProducts = [
			{
				"CategoryId": 1,
				"name": "MakeUp kit",
				"description": "Nyka best makeup kit for women ",
				"cost": "870",
				"quantity": 30
		
			},
			{
				"CategoryId": 2,
				"name": "Summer cloths for Men",
				"description": "Best collection of summer cloths",
				"cost": "720",
				"quantity": 20
				
			},
			{
				"CategoryId": 2,
				"name": "Summer cloths for women",
				"description": "Best collection of summer cloths",
				"cost": "800",
				"quantity": 20
				
			},
			{
				"CategoryId": 3,
				"name": "Footwear for men",
				"description": "all season sandal",
				"cost": "450",
				"quantity": 10
			
			},
			{
				"CategoryId": 3,
				"name": "Footwear for women",
				"description": "all season sandal",
				"cost": "450",
				"quantity": 10
			
			}
		]

const defaultRoles=[
	{
		"name":'User'

	},
	{
		"name":'Admin'

	}


]      
        
        await Categories.bulkCreate(defaultCategories)
        await products.bulkCreate(defaultProducts)
        await Role.bulkCreate(defaultRoles)

		
	}
	catch(err){
		console.log(err)
	}

}