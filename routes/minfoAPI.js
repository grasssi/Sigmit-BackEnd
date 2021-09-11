const express = require('express');
const router = express.Router();
// reuire model
const Minfo = require('../models/minfoSchema')
// add one Materiel
router.post('/minfo', async (req, res) => {
    try {
    const createdMateriel = await Minfo.create(req.body)
    res.json(createdMateriel);
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})

module.exports = router;