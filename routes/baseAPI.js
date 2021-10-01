const express = require('express');
const router = express.Router();
// reuire controller
const baseContoller = require(('../controllers/baseContollers'));

// add one base
router.post('/addbase', baseContoller.addBase)

// Remove one base
router.delete('/removebase/:id', baseContoller.removeBase)

//get all bases
router.get('/allbases', baseContoller.allBases)

// update base by id
router.put('/updatebase/:id', baseContoller.updateBase)

//get base by id
router.get('/getbase/:id', baseContoller.getbase)

module.exports = router;