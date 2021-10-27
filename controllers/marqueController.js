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

//affect types to marque
exports.affectTypes = async (req, res) => {
    try {
        const updatedType = await Marque.findByIdAndUpdate(req.params.idMarque, { $push: { types: req.params.idType } }, { new: true })
        //affect the marque to the selected types
        // for (const i = 0; i < (req.body.owner).length; i++) {
        //     console.log('ownerrrr',req.body.owner);
        //     const updatedOwner = await Owner.findByIdAndUpdate(req.body.owner[i], { $push: { service: req.params.idService } }, { new: true })
        // }
        res.json(updatedType);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.findMarques   = async (req, res) => {
    try {

        const marques = await Marque.find({"types": req.params.id});
        res.json(marques);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}