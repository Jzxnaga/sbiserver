'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeders_file/Sec_User.json","utf8"));
const { generatePassword } = require('../helpers/bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        firstName:data[i].firstName,
        lastName:data[i].lastName,
        gender:data[i].gender,
        email:data[i].email,
        phoneNumber:data[i].phoneNumber,
        username:data[i].username,
        password:generatePassword(data[i].password),
        role:data[i].role,
        onlineStatus:data[i].onlineStatus,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Sec_User', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sec_User', null, {});
  }
};
