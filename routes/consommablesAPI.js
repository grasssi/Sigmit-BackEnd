const express = require('express');
const router = express.Router();
// reuire controller
const ConsinfoContoller = require('../controllers/consommablesController');

// add one Consinfo
router.post('/addconsinfo', ConsinfoContoller.addConsinfo)

// Remove one Consinfo
router.delete('/removeconsinfo/:id', ConsinfoContoller.removeConsinfo)

//get all Consinfos
router.get('/allconsinfos', ConsinfoContoller.allConsinfos)

// update Consinfo by id
router.put('/updateconsinfo/:id', ConsinfoContoller.updateConsinfo)

//get Consinfo by id
router.get('/getconsinfo/:id', ConsinfoContoller.getConsinfo)

module.exports = router;