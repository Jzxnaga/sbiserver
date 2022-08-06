// 'use strict';
// let fs = require ('fs')
// let data = JSON.parse(fs.readFileSync("./seeders_file/Sec_R2.json","utf8"));

// module.exports = {
//   up: (queryInterface, Sequelize) => {
//     let array = []
//     for(let i = 0 ; i < data.length ; i ++){
//       let object = { 
//         id : parseInt(data[i].C),
//         merk : data[i].J.substring(0, data[i].J.indexOf(' ')),
//         jenis : data[i].J.substring(data[i].J.indexOf(' ') + 1),
//         model : data[i].E,
//         tahun : parseInt(data[i].G),
//         createdAt : new Date(),
//         updatedAt : new Date()
//       }
//       array.push(object)
//     } 
//     return queryInterface.bulkInsert('Sec_R2', array);
//   },
//   down: (queryInterface, Sequelize) => {
//     return queryInterface.bulkDelete('Sec_R2', null, {});
//   }
// };

'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
