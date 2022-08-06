'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeders_file/Sec_Customer.json","utf8"));

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
        noKTP:data[i].noKTP,
        // noKK:1,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Sec_Customer', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sec_Customer', null, {});
  }
};
