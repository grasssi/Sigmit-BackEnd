const Ram = require('../models/ramSchema')

//add Ram Controller
exports.addRam = async (req, res) => {
    try {
        const createdRam = await Ram.create(req.body)
        res.json(createdRam);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Ram Contoller
exports.removeRam = async (req, res) => {
    try {
        const deleteRam = await Ram.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Ram 
exports.allRam = async (req, res) => {
    try {
        const Types = await Ram.find({}).populate();
        res.json(Types);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Ram by id controller
exports.updateRam = async (req, res) => {
    try {
        const updatedRam = await Ram.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedRam);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Ram By id contoller
exports.getRam = async (req, res) => {
    try {
        const getRam = await Ram.findById(req.params.id)
        res.json(getRam);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}