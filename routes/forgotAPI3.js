const express = require('express');
const router = express.Router();
// reuire controller
const forgotContoller = require(('../controllers/authController'));
// add one base
router.put('/forgotpassword', forgotContoller.forgotPassword)

module.exports = router;
