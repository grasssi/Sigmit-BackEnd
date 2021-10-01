const Base = require('../models/baseSchema')

//add Base Controller
exports.addBase = async (req, res) => {
    try {
        const createdBase = await Base.create(req.body)
        res.json(createdBase);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Base Contoller
exports.removeBase = async (req, res) => {
    try {
        const deletedBase = await Base.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all bases 
exports.allBases = async (req, res) => {
    try {
        const Bases = await Base.find({}).populate();
        res.json(Bases);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update base by id controller
exports.updateBase = async (req, res) => {
    try {
        const updatedBase = await Base.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedBase);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get base By id contoller
exports.getbase = async (req, res) => {
    try {
        const base = await Base.findById(req.params.id)
        res.json(base);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}