const express = require('express');
const router = express.Router();

// require controller
const authcontoller = require(('../controllers/authController'));

//reset password
router.put('/resetpassword', authcontoller.resetPassword)

//forgot password
router.post('/forgotpassword',authcontoller.forgotPassword)



  module.exports = router;



