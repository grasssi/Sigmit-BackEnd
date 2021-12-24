const Consinfo = require('../models/consinfoSchema')

//add Consinfo Controller
exports.addConsinfo = async (req, res) => {
    try {
        const createdConsinfo = await Consinfo.create(req.body)
        res.json(createdConsinfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id Consinfo Contoller
exports.removeConsinfo = async (req, res) => {
    try {
        const deletedConsinfo = await Consinfo.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted Consinfo successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// get all Consinfos 
exports.allConsinfos = async (req, res) => {
    try {
        const Consinfos = await Consinfo.find({}).populate();
        res.json(Consinfos);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Consinfo by id controller
exports.updateConsinfo = async (req, res) => {
    try {
        const updatedConsinfo = await Consinfo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedConsinfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get Consinfo By id contoller
exports.getConsinfo = async (req, res) => {
    try {
        const Consinfo = await Consinfo.findById(req.params.id)
        res.json(Consinfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}