const db = require ("../../models");
const { R2_Asset , R2_PU77 , R2_TT38 } = require ("../../models");

const Sequelize = require('sequelize');

// const Sequelize = sequelize.Sequelize;


class R2_Asset_controller{
  static async findAll(req,res,next){
    R2_Asset.findAll()
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findAllMerk(req,res,next){
    for(var key in req.query){
      console.log(key);
    }
    R2_Asset.findAll(
      {
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('merk')) ,'merk'],
        ]
      }
    )
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findAllType(req,res,next){
    R2_Asset.findAll({where:{merk:req.body.merk}})
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async findAllModel(req,res,next){
    R2_Asset.findAll({where:{merk:req.body.merk , tipe:req.body.tipe}})
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async findAssetLessorAsId(req,res,next){
    let using_db 

    if (req.body.lessor == "R2_PU77"){
      using_db = R2_PU77
    }else if (req.body.lessor == "R2_TT38"){
      using_db = R2_TT38
    }

    using_db.findOne({include: [{ model: R2_Asset , 
      where :{id : req.body.idSelected}}]})
      .then(data=>{
        res.status(200).json({"lessor":req.body.lessor , data})
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findAssetAsId(req,res,next){
    let using_db 

    if (req.query.lessor == "1"){
      using_db = R2_PU77
    }else if (req.query.lessor == "2"){
      using_db = R2_TT38
    }

    using_db.findOne({include: [{ model: R2_Asset , 
      where :{id : req.query.idSelected}}]})
      .then(data=>{
        // console.log(data)
        res.status(200).json({"lessor":req.query.lessor , data})
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findAssetLessorAsIdManyDb(req,res,next){
    console.log(req.body)

    let array = []
    let using_db 
    var arrayOfLessors = req.body.lessors.split(',');
    console.log(arrayOfLessors)

    for (var i = 0 ; i<arrayOfLessors.length ; i++){
      console.log(arrayOfLessors[i])
      if (arrayOfLessors[i] == "R2_PU77"){
        using_db = R2_PU77
      }else if (arrayOfLessors[i] == "R2_TT38"){
        using_db = R2_TT38
      }else if (arrayOfLessors[i] == "R2_PT74"){
        using_db = R2_PT74
      }else if (arrayOfLessors[i] == "R2_PB63"){
        using_db = R2_PB63
      }else if (arrayOfLessors[i] == "R2_BU42"){
        using_db = R2_BU42
      }else if (arrayOfLessors[i] == "R2_AL39"){
        using_db = R2_AL39
      }
      // using_db = arrayOfLessors[i]

      if(using_db){
        await using_db.findOne({include: [{ model: R2_Asset , 
        where :{id : req.body.idSelected}}]})
        .then(data=>{
          console.log(data)
          array.push({"lessor":arrayOfLessors[i] , data})
        })
        .catch(err=>{
          next(err)
        })
      }
      
    }
    res.status(200).json(array)
  }

  static async create(req,res,next){
    let {
    merk,
    tipe,
    model,
    tahun
    } = req.body
    R2_Asset.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
  }

  static async search(req,res,next){

  }
}

module.exports = R2_Asset_controller;