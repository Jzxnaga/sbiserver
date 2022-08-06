const express = require('express');
const router = express.Router();
const sec_user_controller = require('../../controllers/sec_user_controllers/sec_user_controller')
const {authentication} = require('../../middlewares/auth.js')

router.get('/all',authentication,sec_user_controller.findAll)
router.post('/register',sec_user_controller.register)
router.post('/login',sec_user_controller.login)

module.exports = router;