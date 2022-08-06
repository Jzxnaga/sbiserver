const express = require('express');
const router = express.Router();
const sec_application_controller = require('../../controllers/application_controllers/sec_application_controller')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,sec_application_controller.findAll)
router.post('/create',authentication,sec_application_controller.create)
// router.post('/login',sec_user_controller.login)


module.exports = router;