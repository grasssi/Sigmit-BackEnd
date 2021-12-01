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
                { $group: { _id: { r: "$situation", b: "$type" }, cnt: { $sum: 1 } } },
                { $project: { a: [{ k: "$_id.r", v: "$cnt" }], type: "$_id.b", _id: 0 } },
                { $project: { d: { $arrayToObject: "$a" }, type: 1 } },
                { $group: { _id: "$type", situation: { $push: "$d" } } },
                { $project: { _id: 0, type: "$_id", "options": { $mergeObjects: "$situation" } } },
                { $replaceRoot: { newRoot: { $mergeObjects: ["$$ROOT", "$options"] } } },
                { $project: { options: 0 } }
            ])
        // const global = [{ "type": "qq", "sum": 0, "stock": 0, "opérationnel": 0, "réparation": 0 }]
        // const countKey = Object.keys(count).length;
        // const countglobal = Object.keys(global).length;
        // console.log('countKey', countKey);
        // i = 0;
        // suma = 0;
        // while (i < countKey) {
        //     verif = true
        //     for (let k = 0; k < Object.keys(global).length; k++) {
        //         if (global[k]["type"].toString() == (count[i]._id.type).toString()) {
        //             verif = false;
        //             console.log('count[i=', i, ']._id.type', count[i]._id.situation);
        //             console.log('global[k=', k, ']', global[k]["type"].toString());
        //             console.log('sum', global[k]["sum"]);
        //             global.splice(global["type"], 1, { "type": count[i]._id.type, "sum": (global[k]["sum"])++ });
        //             if (count[i]._id.situation == "مخزون") {
        //                 global.splice(global["type"], 1, { "type": count[i]._id.type, "sum": (global[k]["sum"])++, "stock": count[i].count });
        //             } else if (count[i]._id.situation == "عملياتي") {
        //                 global.splice(global["type"], 1, { "type": count[i]._id.type, "sum": (global[k]["sum"])++, "opérationnel": count[i].count });
        //             } else if (count[i]._id.situation == "تصليح") {
        //                 global.splice(global["type"], 1, { "type": count[i]._id.type, "sum": (global[k]["sum"])++, "réparation": count[i].count });
        //             }
        //         }
        //     }
        //     if (verif == true) {
        //         global.push({ type: count[i]._id.type, sum: 1 });
        //     }
        //     i++
        // }
        res.json(count);
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