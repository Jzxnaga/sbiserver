const express = require('express');
const router = express.Router();
const {authentication} = require('../../middlewares/auth.js')
const R2_TT38R_controller = require('../../controllers/R2_controllers/R2_TT38_controller');

router.get('/all',authentication,R2_TT38R_controller.findAll);
// router.post('/add',R2_SMF_controller.add);
// router.delete('/delete/:id',R2_SMF_controller.delete);

module.exports = router;