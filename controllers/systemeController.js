const Systeme = require('../models/systemeSchema')

//add Systeme Controller
exports.addSysteme = async (req, res) => {
    try {
        const createdSysteme = await Systeme.create(req.body)
        res.json(createdSysteme);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Systeme Contoller
exports.removeSysteme = async (req, res) => {
    try {
        const deleteSysteme = await Systeme.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Systeme 
exports.allSysteme = async (req, res) => {
    try {
        const Systemes = await Systeme.find({}).populate();
        res.json(Systemes);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Systeme by id controller
exports.updateSysteme = async (req, res) => {
    try {
        const updatedSysteme = await Systeme.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedSysteme);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Systeme By id contoller
exports.getSysteme = async (req, res) => {
    try {
        const getSysteme = await Systeme.findById(req.params.id)
        res.json(getSysteme);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}