const express = require('express');
const router = express.Router();
// reuire controller
const serviceContoller = require(('../controllers/serviceController'));

// add one service
router.post('/addservice', serviceContoller.addService)

// Remove one service
router.delete('/removeservice/:id', serviceContoller.removeService)

//get all services
router.get('/allservices', serviceContoller.allServices)

// update service by id
router.put('/updateservice/:id', serviceContoller.updateService)

//get service by id
router.get('/getservice/:id', serviceContoller.getService)

//affect owner to service
router.put('/affect/:idService/:idOwner',serviceContoller.affectOwner)

//desaffect owner to service
router.put('/desaffect/:idService/:idOwner',serviceContoller.desaffectOwner)


module.exports = router;