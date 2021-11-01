const express = require('express');
const router = express.Router();
//require the contoller
Ownercontroller = require('../controllers/ownerController')

// get all owners
router.get('/allowners',Ownercontroller.allOwners)
//get all owners without 
router.get('/allownersws',Ownercontroller.allOwnersWs)

// add one owner
router.post('/addowner', Ownercontroller.addOwner)

// update owner by id
router.put('/updateowner/:id', Ownercontroller.updateOwner)

// delete owner by id
router.delete('/removeowner/:id', Ownercontroller.removeOwner)

//get one owner by id
router.get('/getowner/:id', Ownercontroller.getOwner)

module.exports = router;