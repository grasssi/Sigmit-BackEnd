const express = require('express');
const router = express.Router();

// reuire Controller
const MinfoController = require('../controllers/minfoController')

// add one Materiel
router.post('/addminfo', MinfoController.addMinfoV2)

// Remove one materiel
router.delete('/removeminfo/:id', MinfoController.removeMinfo)

//get all materiels
router.get('/allminfos', MinfoController.allMinfos)

// update materiel by id
router.put('/updateminfo/:id', MinfoController.updateMinfo)

//get materiel by id
router.get('/getminfo/:id', MinfoController.getMinfo)
module.exports = router;