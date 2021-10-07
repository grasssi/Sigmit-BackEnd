const express = require('express');
const router = express.Router();

// require controller
const authcontoller = require(('../controllers/authController'));

//reset password
router.put('/resetpassword', authcontoller.resetPassword)

//forgot password(change)
router.post('/changepassword',authcontoller.changePassword)



  module.exports = router;



