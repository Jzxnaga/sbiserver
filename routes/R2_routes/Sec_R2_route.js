const express = require('express');
const router = express.Router();
const {authentication} = require('../../middlewares/auth.js')
const Sec_R2_controller = require('../../controllers/R2_controllers/Sec_R2_controller');

router.get('/all',authentication,Sec_R2_controller.findAll);
// router.get('/searchR2',authentication,Sec_R2_controller.findDetail);
router.post('/add',authentication,Sec_R2_controller.add);

module.exports = router;