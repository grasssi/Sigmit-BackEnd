const express = require('express');
const router = express.Router();
// reuire controller
const typeContoller = require(('../controllers/typeContoller'));

// add one type
router.post('/addtype', typeContoller.addType)

// Remove one type
router.delete('/removetype/:id', typeContoller.removeType)

//get all types
router.get('/alltypes', typeContoller.allTypes)

// update type by id
router.put('/updatetype/:id', typeContoller.updateType)

//get type by id
router.get('/gettype/:id', typeContoller.getType)

module.exports = router;