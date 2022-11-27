// Row db query's //



const mysql = require('mysql2')

const {HOST,DB,USER} = require('../configs/db.config')

const  connection = mysql.createConnection({
    host : HOST,
    user : USER,
    database : DB
});




/*const userInsertQuery = 'Insert into users(name,role,email,createdAt,	updatedAt) values(?,?,?,?,?)'

const userInsertData = [ 'A30','Developer','A30@gmail.com','2022-10-05 14:12:51',                                   // Value insertion in db using row query
'2022-10-05 14:12:51']
connection.query(userInsertQuery,userInsertData, function(err , data){
    if (err){
        console.log(err)
    }
    console.log(data)
})*/
connection.query(
    'select * from users',
    function(err, result){                             //Selecting all data 
        console.log('result', result)
    }
)