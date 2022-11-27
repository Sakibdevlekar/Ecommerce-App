const{createProduct} = require('../../controller/product')
const{products} = require('../../Models/products')
const{mockRequest,mockResponse} = require('../interceptor')



describe('Product Controller testing',()=>{
    let res,req;
    
beforeEach(()=>{
    req.mockRequest()
    res.mockResponse()
})

    it('test success createProduct Controller',async()=>{ 
        const testPayLoad = {
            "name":"sony tv",
            "description": "About TV",
            "cost": 21000,
            "CategoryId":1
        }
        req.body = testPayLoad;

        const createProductSpy = jest.spyOn(products,'create' ).mockImplementation(
            (testPayLoad) => Promise.resolve(testPayLoad)
        );
        await createProduct.create(req,res)

        expect(createProductSpy).toHaveBeenCalled()
        expect(products.create).toHaveBeenCalledWith(testPayLoad);

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalled()
        expect(res.send).toHaveBeenCalledWith({
                                            "msg":"Product got created",
                                            "result": {
                                                name:'sony tv',
                                                description: 'About TV',
                                                cost: 21000,
                                                quantity:15,
                                                CategoryId:1
		}
        })
    })

/* it('test error createProduct Controller',async()=>{ 
        const testPayLoad = {
            name:'sony tv',
            description: 'About TV',
            cost: 21000,
            quantity:15,
            CategoryId:1
        }
        req.body = testPayLoad;
        const createProductSpy = jest.spyOn(products, 'create').mockImplementation(
            (testPayLoad) => Promise.reject('product creation error ')
        );
        await createProduct(req,res)

        expect(createProductSpy).toHaveBeenCalled()
        expect(products.create).toHaveBeenCalledWith(testPayLoad);

        expect(res.status).toHaveBeenCalledWith(200)
        expect(res.send).toHaveBeenCalled({
            "msg":'Internal server error',
            "err":'Creation '
        })
    })*/
})