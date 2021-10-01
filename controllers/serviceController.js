const Service = require('../models/serviceSchema')

//add Service Controller
exports.addService = async (req, res) => {
    try {
        const createdService = await Service.create(req.body)
        res.json(createdService);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Service Contoller
exports.removeService = async (req, res) => {
    try {
        const deletedService = await Service.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Services 
exports.allServices = async (req, res) => {
    try {
        const Bases = await Service.find({}).populate();
        res.json(Bases);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Service by id controller
exports.updateService = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedService);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Service By id contoller
exports.getService = async (req, res) => {
    try {
        const service = await Service.findById(req.params.id)
        res.json(service);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}