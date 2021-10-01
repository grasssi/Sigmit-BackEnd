const Type = require('../models/typeSchema')

//add Type Controller
exports.addType = async (req, res) => {
    try {
        const createdType = await Type.create(req.body)
        res.json(createdType);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Type Contoller
exports.removeType = async (req, res) => {
    try {
        const deleteType = await Type.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Types 
exports.allTypes = async (req, res) => {
    try {
        const Types = await Type.find({}).populate();
        res.json(Types);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update base by id controller
exports.updateType = async (req, res) => {
    try {
        const updatedBase = await Type.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedBase);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get base By id contoller
exports.getType = async (req, res) => {
    try {
        const type = await Type.findById(req.params.id)
        res.json(type);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}