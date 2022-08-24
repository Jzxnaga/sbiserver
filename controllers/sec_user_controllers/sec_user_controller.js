const db = require ("../../models");
const { Sec_User } = require ("../../models");
const { checkPassword } = require('../../helpers/bcrypt')
const { generateToken, verifyToken } = require('../../helpers/jwt')
//nama harus sesuai nama tabel Sec User

class sec_user_controller{
  static async findAll(req,res,next){
    Sec_User.findAll()
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
      username,
      password
    } = req.body
    let status = true
    Sec_User.findOne({where: { username }})
      .then(data=>{
        if(!data){
          status = true
        } else {
          status = false
        }
        if (status == false){
          throw ({message:'REGISTERED_USERNAME'})
          }
        else{
          return Sec_User.create(req.body)
        }
      })
      .then(data=>{
          res.status(201).json(data)
      })
      .catch(err=>{
          next(err)
      })
  }

  static login(req,res,next){
    const {username, password} = req.body

    Sec_User.findOne({where: { username }})
    .then(data=>{
      if(data){
        let compare = checkPassword(password, data.password)
        if(compare){
          //generate token
          let access_token = generateToken(data)
          //update token in sec_user as id nanti bisa dihilangkan
          const bodyUpdate = {
            token:access_token
          }
              // let verify_token = verifyToken(access_token)
              // console.log(verify_token)
          Sec_User.update(bodyUpdate,{where:{id:data.dataValues.id}})
          //update token in sec_user as id nanti bisa dihilangkan
          res.status(200).json({access_token,username,id:data.dataValues.id})
        }
        else{
          throw ({message: 'INVALID_PASSWORD'})
        }
      } 
      else{
        throw ({message: 'INVALID_USERNAME'})
      }
    })
    .catch(err=>{
      next(err)
    })
  }
}

module.exports = sec_user_controller;