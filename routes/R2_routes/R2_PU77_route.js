const express = require('express');
const router = express.Router();
const {authentication} = require('../../middlewares/auth.js')
const R2_PU77_controller = require('../../controllers/R2_controllers/R2_PU77_controller');

router.get('/all',authentication,R2_PU77_controller.findAll);
// router.post('/add',R2_BFI_controller.add);
// router.delete('/delete/:id',R2_BFI_controller.delete);

module.exports = router;