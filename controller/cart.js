const {Cart,products,Sequelize} =require('../models')

async function updateCart(req,res,next){

const cartId = req.params.id;
    try {

        const cart = await Cart.findByPk(cartId)
        if (cart){
            const productIds = req.body.productIds;
            const product = await products.findAll({
                where:{
                    id:productIds
                }
            })
            if (product.length > 0){
                await cart.setProducts(product);

                const cartProducts = await cart.getProducts()

                let totalCost =0;
                const addedProducts= []

                for (let i =0; i < cartProducts.length; i++ ){
                    totalCost =  totalCost + parseInt( cartProducts[i].dataValues.cost);
                    addedProducts.push({
                        id:cartProducts[i].dataValues.id,
                        name:cartProducts[i].dataValues.name,
                        cost:cartProducts[i].dataValues.cost,
                        description:cartProducts[i].dataValues.description
                    
                    })                   
                }
                res.send({totalCost,addedProducts})
            }
            else{
                res.send({msg:'Products does not exist'})
            }


        }
        else{
            res.status(500).send({msg: 'Cart does not exist'})
        }
    }

    catch(err){

        res.status(500).send({msg: 'Internal sever error', err})
        console.log('err>>>>>>>>>',err)
}

}



async function getCart(req,res,next){
    const cartId = req.params.id;
    try {

        const cart = await Cart.findByPk(cartId)
        if (cart){
        
            
                await cart.setProducts(product);

                const cartProducts = await cart.getProducts()

                let totalCost =0;
                const addedProducts= []

                for (let i =0; i < cartProducts.length; i++ ){
                    totalCost =  totalCost + parseInt( cartProducts[i].dataValues.cost);
                    addedProducts.push({
                        id:cartProducts[i].dataValues.id,
                        name:cartProducts[i].dataValues.name,
                        cost:cartProducts[i].dataValues.cost,
                        description:cartProducts[i].dataValues.description
                    
                    })                   
                }
                res.send({totalCost,addedProducts})
            
        

        }
        else{
            res.status(500).send({msg: 'Cart does not exist'})
        }
    }

    catch(err){

        res.status(500).send({msg: 'Internal sever error', err})
        console.log('err>>>>>>>>>',err)
}

}




module.exports ={updateCart,getCart}