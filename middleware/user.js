const {User, Role, Sequelize} = require('../Module')


async function checkDuplicateUsernameAndEmail(req,res,next){
	if(req.body.username){
		const user = await User.findOne({
			where : {
				username:req.body.username
			}
		})

		if(user){
			res.status(400).send({msg : 'Username already exist'})
			return;
		}
	} 

	if(req.body.email){
		const user = await User.findOne({
			where : {
				email:req.body.email
			}
		})

		if(user){
			res.status(400).send({msg : 'email already exist'})
			return;
		}
	}

	next() 

}

async function checkRoles(req,res,next){
	if(req.body.roles){
		let roles = req.body.roles;
		let flag = true;
		const findRoleFromDB = await Role.findAll({
			attributes:['id']
		});

		if(findRoleFromDB.length > 0){
			const storeRoles = []

			for(let i = 0 ; i<findRoleFromDB.length; i++){
				storeRoles.push(findRoleFromDB[i].dataValues.id)
			}
			for(let i = 0; i< roles.length;i++){
				const result = storeRoles.includes(roles[i])
				if(!result){
					flag = false
					break;
				}
			}
			if(flag){
				next()
			}else{
				res.status(400).send({msg :'Role id does not exist'})
				return;
			}
		}else{
			res.status(500).send({msg: 'Internal server error, Role does not found'});
			return;
		}
	}
	else{
		next()
	}
}



async function isAdmin(req,res,next){
	const userId = req.userId;
	try{
	const user = await User.findByPk(userId)
	const userRoles =  await user.getRoles();
		for(let i = 0; i< userRoles.length; i++){
			if(userRoles[i].dataValues.name === 'Admin'){
				next()
				return;
			}
		}

	res.status(400).send({msg : 'User does not have admin access'})
		return;

	}

	
	catch(err){

		res.status(500).send({msg:'Internal Server error', err});
		return;
	}
}


module.exports = {checkDuplicateUsernameAndEmail,checkRoles,isAdmin}