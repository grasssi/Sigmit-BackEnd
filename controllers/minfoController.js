const Minfo = require('../models/minfoSchema')

//add one materiel Contoller
exports.addMinfo = async (req, res) => {
    try {
        const createdMateriel = await Minfo.create(req.body)
        res.json(createdMateriel);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//remove by Id materiel Contoller
exports.removeMinfo = async (req, res) => {
    try {
        const deletedMinfo = await Minfo.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted base successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}


// get all Materiels 
exports.allMinfos = async (req, res) => {
    try {
        const minfo = await Minfo.find({}).populate();
        res.json(minfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Meteriel by id controller
exports.updateMinfo = async (req, res) => {
    try {
        const updatedMinfo = await Minfo.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedMinfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//Get materiel By id contoller
exports.getMinfo = async (req, res) => {
    try {
        const minfo = await Minfo.findById(req.params.id)
        res.json(minfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}