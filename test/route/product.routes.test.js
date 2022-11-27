const {app} =require('../app')
const request = require ('supertest') 


test('getallProductsApi',async()=>{
    const API_END_POINT = '/eComm/api/v1/Products';

    const res = await request(app).get(API_END_POINT);
    console.log(res.body)
    expect(res.statusCode).toBe(201)

})