const db = require ("../../models");
const { Sec_Application_R2 , Sec_R2 , R2_Asset , R2_PU77 , R2_TT38 } = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class Sec_R2_controller{
  static async findAll(req,res,next){
    Sec_R2.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async add(req,res,next){
    let status = true
    let {
    ID_Sec_Application_R2,
    ID_Sec_Customer,
    ID_R2_Asset,
    ID_R2_Lessor,
    NO_Pol,
    STNK_img
    } = req.body
    

    let using_db

    if (req.body.ID_R2_Lessor == "1"){
      using_db = R2_PU77
    }else if (req.body.ID_R2_Lessor == "2"){
      using_db = R2_TT38
    }

    console.log(using_db)
    using_db.findAll({include: [{ model: R2_Asset , 
      where :{id : req.body.ID_R2_Asset}}]})
      .then(data=>{
        console.log(req.body)
        console.log("data kendaraan untuk input ke Sec_R2" + data)
      })
 
    .then(data=>{
      return Sec_R2.create(req.body)
    })
    .then(data=>{
      res.status(201).json(data)
    })
    .catch(err=>{
        next(err)
    })
  }


  // static async add(req,res,next){
  //   let status = true
  //   let {
  //   ID_Sec_Application_R2,
  //   ID_Sec_Customer,
  //   ID_R2_Asset,
  //   ID_R2_Lessor,
  //   NO_Pol,
  //   STNK_img
  //   } = req.body
    
  //   Sec_R2.findOne({ where: {
  //     NO_pol:req.body.NO_Pol,
  //     ID_R2_Lessor:req.body.ID_R2_Lessor, 
  //   }})
  //   .then(data=>{
  //     if(!data){
  //       status = true
  //     } else {
  //       status = false
  //     }
  //     if (status == false){
  //       console.log(1)
  //       throw ({message:'Registered R2 NOPOL in 1 Leasing'})
  //     } else {
  //       console.log(2)
  //       return Sec_R2.findOne({ where: {
  //         NO_pol:req.body.NO_Pol,
  //         ID_Sec_Customer:req.body.ID_Sec_Customer, 
  //         ID_Sec_Application_R2:req.body.ID_Sec_Application_R2
  //       }})
  //     }
  //   })
  //   //NO_pol , Customer , Application
  //   .then(data=>{
  //     if(!data){
  //       status = true
  //     } else {
  //       status = false
  //     }
  //     if (status == false){
  //       throw ({message:'Registered R2 with same Customer & Application ID 2'})
  //     } else {
  //       console.log(3)
  //       return Sec_R2.findOne({ where: {
  //         NO_Pol:req.body.NO_Pol,
  //         ID_Sec_Application_R2:req.body.ID_Sec_Application_R2
  //       }})
  //     }
  //   })
  //   .then(data=>{
  //     if(!data){
  //       status = true
  //     } else {
  //       status = false
  //     }
  //     if (status == false){
  //       throw ({message:'Registered R2 in this Application ID 3'})
  //     } else {
  //       console.log(4)
  //       return Sec_Application_R2.findOne({ where:{ id:req.body.ID_Sec_Application_R2 }})
  //     }
  //   })
  //   .then(data=>{
  //     if(!data){
  //       throw ({message:'Application has not been created'})
  //     } else {
  //       if(data.ID_Sec_Leasing!=null && data.ID_Sec_Leasing!=parseInt(req.body.ID_R2_Lessor)){
  //         console.log( data.ID_Sec_Leasing , parseInt(req.body.ID_R2_Lessor))
  //         throw ({message:'Cannot Input Other Lessor to same Application'})
  //       }else{
  //         console.log('UPDATINGGG LEASING')
  //         console.log('UPDATINGGG LEASING', data.ID_Sec_Leasing , req.body.ID_Sec_Application_R2)
  //         console.log(5)
  //         return Sec_Application_R2.update(
  //           {
  //             ID_Sec_Leasing: req.body.ID_R2_Lessor,
  //           },
  //           {
  //             where: { id: req.body.ID_Sec_Application_R2 },
  //           }
  //         )
  //       }
  //     }
  //   })
  //   .then(data=>{
  //     let using_db

  //     if (req.body.ID_R2_Lessor == "1"){
  //       using_db = R2_PU77
  //     }else if (req.body.ID_R2_Lessor == "2"){
  //       using_db = R2_TT38
  //     }

  //     console.log(using_db)
  //     using_db.findAll({include: [{ model: R2_Asset , 
  //       where :{id : req.body.ID_R2_Asset}}]})
  //       .then(data=>{
  //         console.log(req.body)
  //         console.log("data kendaraan untuk input ke Sec_R2" + data)
  //       })
  //   })
  //   .then(data=>{
  //     return Sec_R2.create(req.body)
  //   })
  //   .then(data=>{
  //     res.status(201).json(data)
  //   })
  //   .catch(err=>{
  //       next(err)
  //   })
  // }

  static async search(req,res,next){

  }
}

module.exports = Sec_R2_controller;