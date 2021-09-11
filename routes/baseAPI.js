const express = require('express');
const router = express.Router();
// reuire model
const Base = require('../models/baseSchema')
// add one base
router.post('/bases', async (req, res) => {
    try {
    const createdBase = await Base.create(req.body)
    res.json(createdBase);
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})

module.exports = router;