const Service = require('../models/serviceSchema')
const Owner = require('../models/ownerSchema')

//add Service Controller
exports.addService = async (req, res) => {
    try {
        const createdService = await Service.create(req.body)
        const updatedService = await Service.findByIdAndUpdate(createdService._id, { $push: { owners: req.body.owner } }, { new: true })
            console.log('ownerrrr',(req.body.owner).length);
           //affect service to the owners
            for (let i = 0; i < (req.body.owner).length; i++) {
            const updatedOwner = await Owner.findByIdAndUpdate(req.body.owner[i], { $push: { service: createdService._id } }, { new: true })
             }
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

//affect owner to service
exports.affectOwner = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.idService, { $push: { owners: req.body.owner } }, { new: true })
        //affect the service to the selected owners
        for (const i = 0; i < (req.body.owner).length; i++) {
            console.log('ownerrrr',req.body.owner);
            const updatedOwner = await Owner.findByIdAndUpdate(req.body.owner[i], { $push: { service: req.params.idService } }, { new: true })
        }
        res.json(updatedService);

    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//desaffect owner from service
exports.desaffectOwner = async (req, res) => {
    try {
        const updatedService = await Service.findByIdAndUpdate(req.params.idService, { $pull: { owners: req.params.idOwner } }, { new: true })
        res.json(updatedService);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}