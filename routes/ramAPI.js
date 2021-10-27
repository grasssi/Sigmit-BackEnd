const express = require('express');
const router = express.Router();
// reuire controller
const ramContoller = require(('../controllers/ramController'));

// add one service
router.post('/addram', ramContoller.addRam)

// Remove one service
router.delete('/removeram/:id', ramContoller.removeRam)

//get all services
router.get('/allram', ramContoller.allRam)

// update service by id
router.put('/updateram/:id', ramContoller.updateRam)

//get service by id
router.get('/getram/:id', ramContoller.getRam)

// //affect owner to service
// router.put('/affectService/:idService', serviceContoller.affectSysteme)

// //desaffect owner to service
// router.put('/desaffectService/:idService/:idOwner', serviceContoller.desaffectOwner)


module.exports = router;