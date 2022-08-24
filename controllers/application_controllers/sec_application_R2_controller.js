const db = require ("../../models");
const { Sec_Application_R2 , Sec_User , Sec_Customer , Sec_R2 , R2_Asset} = require ("../../models");


class sec_application_R2_controller{
  static async findAll(req,res,next){
    Sec_Application_R2.findAll({include: [{ model: Sec_User  } , { model: Sec_Customer } 
      , { model : Sec_R2 , include: [{
        model: R2_Asset }]}
    ]})
    //Sec_Application_R2.findOne({ where:{ id:1 }})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findOneAppByID(req,res,next){
    Sec_Application_R2.findOne({ where :{id : req.query.id } , include: [{ model: Sec_User  } , { model: Sec_Customer } 
      , { model : Sec_R2 }
    ]})
    //Sec_Application_R2.findOne({ where:{ id:1 }})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findOneAppByNopol(req,res,next){
    Sec_Application_R2.findOne({include: [{ model: Sec_User  } , { model: Sec_Customer } 
      , { model : Sec_R2 ,  where :{NO_Pol : req.query.Nopol }}
    ]})
    //Sec_Application_R2.findOne({ where:{ id:1 }})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async findAllFilterByAgenId(req,res,next){
    Sec_Application_R2.findOne({include: [{ model: Sec_User , where: {id : req.query.id}  } , { model: Sec_Customer } 
      , { model : Sec_R2 }
    ]})
    //Sec_Application_R2.findOne({ where:{ id:1 }})
      .then(data=>{
        res.status(200).json(data)
      })
      .catch(err=>{
        next(err)
      })
  }

  static async create(req,res,next){
    let {
      totalPermohonan, 
      totalPenawaran,
      totalPencairan,
      jumlahItem,
      komisiAgen, 
      statusPengajuan,
      ID_Sec_Agen,
      ID_Sec_Customer,
      ID_R2_Lessor
    } = req.body
    Sec_Application_R2.create(req.body)
    .then(data=>{
      res.status(200).json(data)
    })
    .catch(err=>{
      next(err)
    })
    
  }
}

module.exports = sec_application_R2_controller;