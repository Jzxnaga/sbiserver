const express = require('express');
const router = express.Router();
const sec_application_R2_controller = require('../../controllers/application_controllers/sec_application_R2_controller')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,sec_application_R2_controller.findAll)
router.post('/create',authentication,sec_application_R2_controller.create)
// router.post('/login',sec_user_controller.login)
router.get('/findOneAppByID',authentication,sec_application_R2_controller.findOneAppByID)
router.get('/findOneAppByNopol',authentication,sec_application_R2_controller.findOneAppByNopol)

module.exports = router;