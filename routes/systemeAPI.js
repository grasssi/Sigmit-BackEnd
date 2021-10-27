const express = require('express');
const router = express.Router();
// reuire controller
const systemeContoller = require(('../controllers/systemeController'));

// add one service
router.post('/addsysteme', systemeContoller.addSysteme)

// Remove one service
router.delete('/removesysteme/:id', systemeContoller.removeSysteme)

//get all services
router.get('/allsysteme', systemeContoller.allSysteme)

// update service by id
router.put('/updatesysteme/:id', systemeContoller.updateSysteme)

//get service by id
router.get('/getsysteme/:id', systemeContoller.getSysteme)

// //affect owner to service
// router.put('/affectService/:idService', serviceContoller.affectSysteme)

// //desaffect owner to service
// router.put('/desaffectService/:idService/:idOwner', serviceContoller.desaffectOwner)


module.exports = router;