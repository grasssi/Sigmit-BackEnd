const Minfo = require('../models/minfoSchema')

//add one materiel Contoller
exports.addMinfo = async (req, res) => {
    try {
        console.log('grassiiii=', req.body.type);
        const createdMinfo = await Minfo.create(req.body)

        await Minfo.findByIdAndUpdate(createdMinfo._id, {
            $addToSet : [{
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
exports.addMinfoV2 = async (req, res) => {
    try {
        const createdMinfo = await Minfo.create(req.body)
        if (mongoose.Types.ObjectId.isValid(req.body.type)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    type: req.body.type,
                }],
            }, { new: true })
        }
        if (mongoose.Types.ObjectId.isValid(req.body.Marque)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    Marque: req.body.Marque,

                }],
            }, { new: true })
        }
        if (mongoose.Types.ObjectId.isValid(req.body.owner)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    owner: req.body.owner,

                }],
            }, { new: true })
        }
        if (mongoose.Types.ObjectId.isValid(req.body.ram)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    ram: req.body.ram,

                }],
            }, { new: true })
        }
        if (mongoose.Types.ObjectId.isValid(req.body.systeme)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    systeme: req.body.systeme,

                }],
            }, { new: true })
        }
        if (mongoose.Types.ObjectId.isValid(req.body.application)) {
            await Minfo.findByIdAndUpdate(createdMinfo._id, {
                $push: [{
                    application: req.body.application,

                }],
            }, { new: true })
        }
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
        const minfo = await Minfo.find({})
            .populate('type', { type: 1 })
            .populate('Marque')
            .populate('service')
            .populate('ram')
            .populate('owner')
            .populate('systeme')
            .populate('application')
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