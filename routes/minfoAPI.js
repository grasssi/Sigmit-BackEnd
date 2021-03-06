const express = require('express');
const router = express.Router();

// reuire Controller
const MinfoController = require('../controllers/minfoController')

// add one Materiel
router.post('/addminfo', MinfoController.addMinfoV3)

// Remove one materiel
router.delete('/removeminfo/:id', MinfoController.removeMinfo)

//get all materiels
router.get('/allminfos', MinfoController.allMinfos)

// update materiel by id
router.put('/updateminfo/:id', MinfoController.updateMinfo)

//get materiel by id
router.get('/getminfo/:id', MinfoController.getMinfo)

//countDocuments 
router.get('/allcountminfos', MinfoController.allcountMinfos)

//getallApplications
router.get('/allapplication', MinfoController.allappMinfos)

//getallApplicationsbyServices
router.get('/allminfosbyservice', MinfoController.allMinfosbyService)


module.exports = router;
