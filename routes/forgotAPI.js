const express = require('express');
const router = express.Router();
// reuire controller
const authcontoller = require(('../controllers/authController'));

// forgot password
router.put('/forgotpassword', authcontoller.forgotPassword)

//reset password
router.put('/resetpassword', authcontoller.resetPassword)

module.exports = router;
