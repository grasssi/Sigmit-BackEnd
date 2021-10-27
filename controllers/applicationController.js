const Application = require('../models/applicationSchema')

//add Application Controller
exports.addApplication = async (req, res) => {
    try {
        const createdApplication = await Application.create(req.body)
        res.json(createdApplication);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Application Contoller
exports.removeApplication = async (req, res) => {
    try {
        const deleteApplication = await Application.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted Application successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Application 
exports.allApplication = async (req, res) => {
    try {
        const Applications = await Application.find({}).populate();
        res.json(Applications);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Application by id controller
exports.updateApplication = async (req, res) => {
    try {
        const updatedApplication = await Application.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedApplication);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Application By id contoller
exports.getApplication = async (req, res) => {
    try {
        const getApplication = await Application.findById(req.params.id)
        res.json(getApplication);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}