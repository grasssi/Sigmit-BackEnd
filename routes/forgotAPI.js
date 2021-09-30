const express = require('express');
const router = express.Router();

// require controller
const authcontoller = require(('../controllers/authController'));

// forgot password
//router.put('/forgotpassword', authcontoller.forgotPassword)

//reset password
router.put('/resetpassword', authcontoller.resetPassword)

router.post('/forgotpassword',authcontoller.forgotPassword)



  module.exports = router;



