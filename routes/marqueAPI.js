const express = require('express');
const router = express.Router();
// reuire Controller
const marqueController = require('../controllers/marqueController')

// get all user
router.get('/allmarques', marqueController.allMarques)

// add one user
router.post('/addmarque', marqueController.addMarque)

//getone user by id
router.get('/getmarque/:id', marqueController.getMarque)

// update user by id
router.put('/updatemarque/:id', marqueController.updateMarque)

// delete user by id
router.delete('/removemarque/:id', marqueController.removeMarque)
 
//affec types to marque
router.put('/affecttypes/:idType/:idMarque', marqueController.affectTypes)

router.get('/findmarques/:id', marqueController.findMarques)

module.exports = router;