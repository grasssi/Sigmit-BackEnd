const Minfo = require('../models/minfoSchema')

//add one materiel Contoller
exports.addMinfo = async (req, res) => {
    try {
        const createdMinfo = await Minfo.create(req.body)
        await Minfo.findByIdAndUpdate(createdMinfo._id, {
            $push: [{
                type: req.body.type,
                Marque: req.body.Marque,
                owner: req.body.owner,
                ram: req.body.ram,
                systeme: req.body.systeme,
                application: req.body.application
            }],
        }, { new: true })
        res.json(createdMinfo);
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
        const minfo = await Minfo.find({}).populate('type');
        console.log((minfo).length);
        for (const i = 0; i < (minfo).length; i++) {
         
        console.log(minfo[i].type.type);
        }
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