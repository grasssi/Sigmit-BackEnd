const express = require('express');
const router = express.Router();
// require controller
const systemeContoller = require(('../controllers/systemeController'));

// add one systeme
router.post('/addsysteme', systemeContoller.addSysteme)

// Remove one systeme
router.delete('/removesysteme/:id', systemeContoller.removeSysteme)

//get all systemes
router.get('/allsysteme', systemeContoller.allSysteme)

// update systeme by id
router.put('/updatesysteme/:id', systemeContoller.updateSysteme)

//get systeme by id
router.get('/getsysteme/:id', systemeContoller.getSysteme)

// //affect owner to service
// router.put('/affectService/:idService', serviceContoller.affectSysteme)

// //desaffect owner to service
// router.put('/desaffectService/:idService/:idOwner', serviceContoller.desaffectOwner)


module.exports = router;