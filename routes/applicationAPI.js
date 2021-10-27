const express = require('express');
const router = express.Router();
// reuire controller
const applicationContoller = require(('../controllers/applicationController'));

// add one application
router.post('/addapplication', applicationContoller.addApplication)

// Remove one application
router.delete('/removeapplication/:id', applicationContoller.removeApplication)

//get all application
router.get('/allapplication', applicationContoller.allApplication)

// update application by id
router.put('/updateapplication/:id', applicationContoller.updateApplication)

//get application by id
router.get('/getapplication/:id', applicationContoller.getApplication)

// //affect owner to service
// router.put('/affectService/:idService', serviceContoller.affectApplication)

// //desaffect owner to service
// router.put('/desaffectService/:idService/:idOwner', serviceContoller.desaffectOwner)


module.exports = router;