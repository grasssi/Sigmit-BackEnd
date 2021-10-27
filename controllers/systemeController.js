const Systeme = require('../models/systemeSchema')

//add Type Controller
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

//remove by Id Type Contoller
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

// get all Types 
exports.allSysteme = async (req, res) => {
    try {
        const Types = await Systeme.find({}).populate();
        res.json(Types);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update base by id controller
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

//Get base By id contoller
exports.getSysteme = async (req, res) => {
    try {
        const Systeme = await Systeme.findById(req.params.id)
        res.json(Systeme);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}