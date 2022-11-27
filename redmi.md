npm init    //initializing  project by adding package.Json 

// Installing dependency //

npm install express --save   

npm i sequelize mysql2 body-parser --save


npm install express --


npm i dotenv --save


-//installing cli 

npm i sequelize-cli



//creating data base

npx sequelize db:create

// crating models (Category model created )
npx sequelize model:generate --name Categories --attributes name:text,description:text




POST API:

localhost:8000/eComm/api/v1/createCategories

BODY  DATA :

{
    "name" : "clothes",
    "description" : "summer & winter clothes"
}


GET API'S :

Getting all categories

localhost:8000/eComm/api/v1/categories

GET categories by id :

localhost:8000/eComm/api/v1/categories/3


GET categories by name :

localhost:8000/eComm/api/v1/categories/mobile

PUT API :

localhost:8000/eComm/api/v1/categories/3

BODY  DATA :

{
    "name" : "clothes",                           //here we update the data in (PUT method)
    "description" : "summer & winter clothes"
}




DELETE API :

localhost:8000/eComm/api/v1/categories/2


Creating product model 

npx sequelize model:generate --name product --attributes name:text,cost:text,description:text,quantity:integer


for creating the user model

npx sequelize model:generate --name User --attributes username:text,email:text,password:text


creating role model

npx sequelize model:generate --name Role --attributes 
name:text                       



JWT authentication 

https://www.sohamkamani.com/nodejs/jwt-authentication/



JWT Internally how its work 

https://flaviocopes.com/jwt/


installing JSON web token JWT
npm i jsonwebtoken



creating the cart model

 npx sequelize model:generate --name Cart --attributes cost:integer



 jest is a framework for testing 

  installing  jest in eComm test


  npm i --save-dev jest


for run test 

npm run test 



mocking 

https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/


https://pawelgrzybek.com/mocking-functions-and-modules-with-jest/



  installing  jest and other package in eCommerce

npm i --save-dev jest cross-env supertest

testing repository

https://github.com/Vishwa07dev/eCommerce/tree/main/tests/unit/controllers

git remote add origin git@github.com:username/<repo_name> to add the git remote

Remove-Item ".git" -Force -Recurse // to remove git from vs code 


//////git /////

git init  // initializing git 
git status // checking the status 
git add . //  adding the file in git 
git commit -m 'project name' // here we add the project  to git

git remote add origin git@github.com:username/<repo_name>// to add the git remote


git push origin master // finally pushing repo to git