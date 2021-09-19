const express = require('express');
const router = express.Router();
// reuire model
const baseContollers = require(('../controllers/baseContollers'));
// add one base
router.post('/AddBase',baseContollers.addBase)
// Remove one base
router.delete('/RemoveBase/:id',baseContollers.removeBase)
module.exports = router;
//get all bases
router.get('/AllBases',baseContollers.allBases)
// update base by id
router.put('/UpdateBase/:id',baseContollers.updateBase)
//get base by id
router.get('/GetBase/:id',baseContollers.getbase)