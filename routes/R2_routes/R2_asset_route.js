const express = require('express');
const router = express.Router();
const {authentication} = require('../../middlewares/auth.js')
const R2_Asset_controller = require('../../controllers/R2_controllers/R2_Asset_controller');

router.get('/all',authentication,R2_Asset_controller.findAll);
// router.post('/searchR2',authentication,R2_Asset_controller.findDetail);
// router.delete('/delete/:id',R2_Asset_controller.delete);
router.post('/findAssetLessorAsId',authentication,R2_Asset_controller.findAssetLessorAsId)
router.post('/findAssetLessorAsIdManyDb',authentication,R2_Asset_controller.findAssetLessorAsIdManyDb)
router.get('/findAssetAsId',authentication,R2_Asset_controller.findAssetAsId);

module.exports = router;