const Marque = require('../models/marqueSchema')
// get all Marques
exports.allMarques = async (req, res) => {
    try {
        const marques = await Marque.find({});
        res.json(marques);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//add one Marque
exports.addMarque = async (req, res) => {
    try {
        const createdMarque = await Marque.create(req.body)
       // const updatedService = await Service.findByIdAndUpdate(req.body.service, { $push: { owners: req.params.idOwner } }, { new: true })
        res.json(createdMarque);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Marque by id
exports.updateMarque = async (req, res) => {
    try {
        const updatedMarque = await Marque.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedMarque);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove Marque by id
exports.removeMarque = async (req, res) => {
    try {
        const deletedMarque = await Marque.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted the Marque successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
//get one Marque by id
exports.getMarque = async (req, res) => {
    try {
        //hash password
        const getMarque = await Marque.findById(req.params.id)
        res.json(getMarque);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}