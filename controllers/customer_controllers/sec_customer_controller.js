const db = require ("../../models");
const { Sec_Customer } = require ("../../models");
const { checkPassword } = require('../../helpers/bcrypt')
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class sec_customer_controller{
  static async findAll(req,res,next){
    Sec_Customer.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static register(req,res,next){
    let {
      firstName, 
      lastName,
      gender,
      email,
      phoneNumber, 
      noKTP
    } = req.body
    let status = true
    Sec_Customer.findOne({ where: {noKTP: req.body.noKTP, phoneNumber: req.body.phoneNumber} })
      .then(data=>{
        if(!data){
          status = true
        } else {
          status = false
        }
        if (status == false){
          throw ({message:'REGISTERED_PHONE_NUMBER_KTP'})
          }
        else{
          return Sec_Customer.create(req.body)
        }
      })
      .then(data=>{
          res.status(201).json(data)
      })
      .catch(err=>{
          next(err)
      })
  }
  
  static check(req,res,next){
    let {
      phoneNumber, 
      noKTP
    } = req.body
    Sec_Customer.findOne({ where: {noKTP: req.body.noKTP, phoneNumber: req.body.phoneNumber} })
      .then(data=>{
          if(data){
            res.status(201).json(data)
          }else{
            throw ({message:'Tidak Ditemukan'})
          }
          
      })
      .catch(err=>{
          next(err)
      })
  }
}

module.exports = sec_customer_controller;