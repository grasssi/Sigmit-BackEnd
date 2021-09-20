const express = require('express');
const router = express.Router();
// reuire controller
const authcontoller = require(('../controllers/authController'));
// add one base
router.put('/forgotpassword', authcontoller.forgotPassword)
router.put('/resetpassword', authcontoller.resetPassword)

module.exports = router;
