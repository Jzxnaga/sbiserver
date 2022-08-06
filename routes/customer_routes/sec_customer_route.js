const express = require('express');
const router = express.Router();
const sec_customer_controller = require('../../controllers/customer_controllers/sec_customer_controller')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,sec_customer_controller.findAll)
router.post('/register',authentication,sec_customer_controller.register)
router.post('/check',authentication,sec_customer_controller.check)
// router.post('/login',sec_user_controller.login)

module.exports = router;