const db = require ("../../models");
const { R2_Asset , R2_TT38 } = require ("../../models");


class sec_R2_controller{
  static async findAll(req,res,next){
    R2_TT38.findAll({include: [{ model: R2_Asset }]})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }
  static async create(req,res,next){
    let {
        ID_R2,
        price
      } = req.body
    R2_TT38.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
    
  }
}

module.exports = sec_R2_controller;