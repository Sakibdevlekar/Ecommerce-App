const jwt = require('jsonwebtoken');
async function verifyToken(req,res,next){
	const token = req.headers['x-access-token'];

	if(token){
		
		try{
			const result = await jwt.verify(token, process.env.JWT_SECRET_KEY)
			if(result){
                req.userId=result.id;
				console.log('>>>>>>>>>>>>',req.userId)
				next()
			}else{
				res.status(400).send({msg : 'auth token has expired. Please Relogin'})
				return;
			}
		}catch(err){
			res.status(400).send({msg : 'auth token has expired. Please Relogin'})
			return;	
		}


	}else{
		res.status(401).send({msg : 'auth token is missing'})
		console.log(token)
		return;
	}
}




module.exports = { verifyToken}