'use strict';
let fs = require ('fs')
let data = JSON.parse(fs.readFileSync("./seeders_file/Sec_Application.json","utf8"));

module.exports = {
  up: (queryInterface, Sequelize) => {
    let array = []
    for(let i = 0 ; i < data.length ; i ++){
      let object = { 
        totalPermohonan:0,
        totalPenawaran:0,
        totalPencairan:0,
        jumlahItem:0,
        komisiAgen:0,
        statusPengajuan:"T",
        ID_Sec_Agen:data[i].ID_Agen,
        ID_Sec_Customer:data[i].ID_Customer,
        ID_R2_Lessor:null,
        createdAt : new Date(),
        updatedAt : new Date()
      }
      array.push(object)
    } 
    return queryInterface.bulkInsert('Sec_Application_R2', array);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Sec_Application_R2', null, {});
  }
};
