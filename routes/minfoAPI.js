const express = require('express');
const router = express.Router();
// reuire Controller
const MinfoController = require('../controllers/minfoController')
// add one Materiel
router.post('/addminfo', MinfoController.addMinfo)
// Remove one materiel
router.delete('/removeminfo/:id', MinfoController.removeMinfo)
//get all bases
router.get('/allminfos', MinfoController.allMinfos)
// update base by id
router.put('/updateminfo/:id', MinfoController.updateMinfo)
//get base by id
router.get('/getminfo/:id', MinfoController.getMinfo)
module.exports = router;