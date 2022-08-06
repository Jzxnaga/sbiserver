const Sequelize = require("sequelize");

const sequelize = new Sequelize("salingbantu",'root','1234',
{ host: '127.0.0.1' , 
dialect: "mysql" , 
operatorsAlieases: false
});


// import * as pg from 'pg';
// import { Sequelize } from 'sequelize';

// const sequelize = new Sequelize('postgres://admin:admin@localhost:3306/mydb', {
//   dialectModule: pg
// });


module.exports = sequelize;
global.sequelize = sequelize;

