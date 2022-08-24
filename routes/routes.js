const express = require('express');
const router = express.Router();
// const sec_user_controller = require('../controllers/user_controllers/sec_user_controller')
const {authentication} = require('../middlewares/auth.js')
const sec_user_route = require('./sec_user_routes/sec_user_route')
const sec_application_R2_route = require('./sec_application_routes/sec_application_R2_route')
const customer_route = require('./customer_routes/sec_customer_route')
const R2_asset_Route = require('./R2_routes/R2_asset_route')
const R2_PU77_route = require('./R2_routes/R2_PU77_route')
const R2_TT38_route = require('./R2_routes/R2_TT38_route')
const Sec_R2_route = require('./R2_routes/Sec_R2_route')

// router.get("/all",authentication,sec_user_controller.findAll)
// router.get("/all",console.log('error'),sec_user_controller.findAll);
// router.get('/all',authentication,sec_user_controller.findAll)
// router.post('/register',sec_user_controller.register)
// router.post('/login',sec_user_controller.login)

router.use('/user',authentication,sec_user_route)
router.use('/application',authentication,sec_application_R2_route)
router.use('/customer',authentication,customer_route)
router.use('/R2',authentication,R2_asset_Route)
router.use('/R2/PU77',authentication,R2_PU77_route)
router.use('/R2/TT38',authentication,R2_TT38_route)
router.use('/Sec_R2',authentication,Sec_R2_route)
module.exports = router;