const express = require('express');
const router = express.Router();
//require the contoller
Ownercontroller = require('../controllers/ownerController')

// get all user
router.get('/allowners',Ownercontroller.allOwners)

// add one user
router.post('/addowner', Ownercontroller.addOwner)

// update user by id
router.put('/updateowner/:id', Ownercontroller.updateOwner)

// delete user by id
router.delete('/removeowner/:id', Ownercontroller.removeOwner)

//get one owner by id
router.get('/getowner/:id', Ownercontroller.getOwner)

module.exports = router;