'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeders_file/R2PriceList.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        ID_R2 : parseInt(i)+1,
        price : parseInt(data[i].SN87)*1000000,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('R2_SN87', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('R2_SN87', null, {});
  }
};