const express = require('express');
const router = express.Router();
// reuire controller
const serviceContoller = require(('../controllers/serviceController'));

// add one base
router.post('/addservice', serviceContoller.addService)

// Remove one base
router.delete('/removeservice/:id', serviceContoller.removeService)

//get all bases
router.get('/allservices', serviceContoller.allServices)

// update base by id
router.put('/updateservice/:id', serviceContoller.updateService)

//get base by id
router.get('/getservice/:id', serviceContoller.getService)

module.exports = router;