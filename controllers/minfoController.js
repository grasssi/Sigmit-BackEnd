const Minfo = require('../models/minfoSchema')
const mongoose = require('mongoose')
//add one materiel Contoller
exports.addMinfo = async (req, res) => {
    // console.log('grosso',req);
    try {
        // if (mongoose.Types.ObjectId.isValid(req.body.type) == false) {
        //     delete req.body.type 
        // }
        // if (mongoose.Types.ObjectId.isValid(req.body.Marque) == false) {
        //     delete req.body.Marque
        // }
        //  if (mongoose.Types.ObjectId.isValid(req.body.service) == false) {
        //      delete  req.body.service
        //  }
        //  if (mongoose.Types.ObjectId.isValid(req.body.SerialNumber) == false) {
        //      delete req.body.SerialNumber
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.owner) == false) {
        //         delete req.body.owner 
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.ram) == false) {
        //         delete req.body.ram
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.systeme) == false) {
        //         delete req.body.systeme
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.domaine) == false) {
        //         delete req.body.domaine
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.application) == false) {
        //         delete req.body.application 
        //     }
        //     if (mongoose.Types.ObjectId.isValid(req.body.situation) == false) {
        //         delete req.body.situation
        //     }
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
exports.addMinfoV2 = async (req, res) => {
    try {
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.type));
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.Marque));
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.owner));
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.ram));
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.systeme));
        console.log('groSssssssssso', mongoose.Types.ObjectId.isValid(req.body.application));
        // 
        if (mongoose.Types.ObjectId.isValid(req.body.type) == false) {
            delete req.body.type
        }
        if (mongoose.Types.ObjectId.isValid(req.body.Marque) == false) {
            delete req.body.Marque
        }
        if (mongoose.Types.ObjectId.isValid(req.body.service) == false) {
            delete req.body.service
        }
        // if (mongoose.Types.ObjectId.isValid(req.body.SerialNumber) == false) {
        //     delete req.body.SerialNumber
        // }
        if (mongoose.Types.ObjectId.isValid(req.body.owner) == false) {
            delete req.body.owner
        }
        if (mongoose.Types.ObjectId.isValid(req.body.ram) == false) {
            delete req.body.ram
        }
        if (mongoose.Types.ObjectId.isValid(req.body.systeme) == false) {
            delete req.body.systeme
        }
        if (mongoose.Types.ObjectId.isValid(req.body.domaine) == false) {
            delete req.body.domaine
        }
        if (mongoose.Types.ObjectId.isValid(req.body.application) == false) {
            delete req.body.application
        }
        // if (mongoose.Types.ObjectId.isValid(req.body.situation) == false) {
        //     delete req.body.situation
        // }
        console.log(req.body);
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
exports.allcountMinfos = async (req, res) => {
    try {
        const count = await Minfo.aggregate(
            [
                { $match: {} },

                {
                    $group: {
                        _id: {
                            "type": "$type",
                            "situation": "$situation",
                        },
                        count: { $count: {} },

                    }
                },
                // {
                //     $lookup:
                //     {
                //         from: "type",
                //         localField: "type._id",
                //         foreignField: "_id",
                //         as: "type"
                //     }
                // },
                //  { "$unwind": "$type" },

            ],

        )
        const global = [{ "type": "qq", "sum": 0, "stock": 0, "opérationnel": 0, "réparation": 0 }]
        const countKey = Object.keys(count).length;
        const countglobal = Object.keys(global).length;
        //console.log(global[countglobal-1]["type"]);

        j = 0;
        verif = true
        for (let i = 0; i < countKey; i++) {
            for (let k = 0; k < Object.keys(global).length; k++) {
                console.log('global',global[k]["type"].toString());
                console.log('count',(count[i+k]._id.type).toString());
                if (global[k]["type"].toString() == (count[i+k]._id.type).toString()) {
                    
                    verif = false;
                }
            }
            if (verif == true) {
                global.push({ type: count[i]._id.type });
                //  global[countglobal1-1]["type"] = count[i]._id.type
               // console.log(global);
            }
        }
        res.json(global);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}
//Get application By id contoller
exports.allappMinfos = async (req, res) => {
    try {
        const minfo = await Minfo.find({ domaine: 'منظومة' })
            .populate('service')
            .populate('application')
        res.json(minfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}