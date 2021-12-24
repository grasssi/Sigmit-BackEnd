const Minfo = require('../models/minfoSchema')
const Consinfo = require('../models/consinfoSchema')
const Res = require('../models/resultatSchema')
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
        // if (mongoose.Types.ObjectId.isValid(req.body.domaine) == false) {
        //     delete req.body.domaine
        // }
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
                application: req.body.application,
                typecons: req.body.typecons
            }],
        }, { new: true }
        )
        res.json(createdMinfo);
        const updatedConsinfo = await Consinfo.findByIdAndUpdate(req.body.typecons, { $push: { minfo: createdMinfo._id } }, { new: true })
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

exports.addMinfoV3 = async (req, res) => {
    try {
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
        // if (mongoose.Types.ObjectId.isValid(req.body.domaine) == false) {
        //     delete req.body.domaine
        // }
        if (mongoose.Types.ObjectId.isValid(req.body.application) == false) {
            delete req.body.application
        }
        // if (mongoose.Types.ObjectId.isValid(req.body.situation) == false) {
        //     delete req.body.situation
        // }
        console.log(req.body);
        const createdMinfo = await Minfo.create(req.body)
        const updatedConsinfo = await Consinfo.findByIdAndUpdate(req.body.typecons, { $push: { minfo: createdMinfo._id } }, { new: true })

        // await Minfo.findByIdAndUpdate(createdMinfo._id, {
        //     $push: [{
        //         type: req.body.type,
        //         Marque: req.body.Marque,
        //         owner: req.body.owner,
        //         ram: req.body.ram,
        //         systeme: req.body.systeme,
        //         application: req.body.application,
        //         typecons: req.body.typecons
        //     }],
        // }, { new: true }
        // )
        res.json(createdMinfo);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// try {
//     const createdMinfo = await Service.create(req.body)
//     const updatedMinfo = await Service.findByIdAndUpdate(createdService._id, { $push: { owners: req.body.owner } }, { new: true })
//         console.log('ownerrrr',(req.body.owner).length);
//        //affect service to the owners
//         for (let i = 0; i < (req.body.owner).length; i++) {
//         const updatedOwner = await Owner.findByIdAndUpdate(req.body.owner[i], { $push: { service: createdService._id } }, { new: true })
//          }
// }
// catch (err) {
//     console.log(err);
//     res.status(500).json({ message: 'Internal server error' });
// }
// }


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
        const count = await Minfo.aggregate([
            {
                $group: {
                    _id: {
                        b: "$type"
                    },

                    total: {
                        $sum: 1
                    },
                    date: {
                        $addToSet: "$date"
                    },
                    place: {
                        $addToSet: "$place"
                    },
                    root: {
                        $push: "$$ROOT"
                    }
                }
            },
            {
                "$unwind": "$root"
            },
            {
                $group: {
                    _id: {
                        r: "$root.situation",
                        b: "$root.type",
                        date: "$date",
                        place: "$place",
                    },
                    cnt: {
                        $sum: 1
                    },
                    total: {
                        "$first": "$total"
                    }

                }
            },
            {
                $project: {
                    a: [
                        {
                            k: "$_id.r",
                            v: "$cnt"
                        }
                    ],
                    type: "$_id.b",
                    total: "$total",
                    date: "$_id.date",
                    place: "$_id.place",
                    _id: 0,
                }
            },
            {
                $project: {
                    d: {
                        $arrayToObject: "$a"
                    },
                    date: 1,
                    place: 1,
                    type: 1,
                    total: 1
                }
            },
            {
                //Here
                $group: {
                    _id: "$type",

                    situation: {
                        $push: "$d"
                    },
                    sum: {
                        "$first": "$total"
                    },
                    date: {
                        "$first": "$date"
                    },
                    place: {
                        "$first": "$place"
                    },
                }
            },
            {
                $project: {
                    _id: 0,
                    type: "$_id",
                    sum: 1,
                    date: "$date",
                    "options": {
                        $mergeObjects: "$situation"
                    },
                    // date: {
                    //     $reduce: {
                    //         input: "$date",
                    //         initialValue: "",
                    //         in: {
                    //             $cond: [{ "$eq": ["$$value", ""] }, "$$this", { $concat: ["$$value"," ", "$$this"] }]
                    //         }
                    //     }
                    // },
                    place: {
                        $reduce: {
                            input: "$place",
                            initialValue: "",
                            in: {
                                $cond: [{ "$eq": ["$$value", ""] }, "$$this", { $concat: ["$$value", " ", "$$this"] }]
                            }
                        }
                    }
                }
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            "$$ROOT",
                            "$options"
                        ]
                    }
                }
            },
            {
                $project: {
                    options: 0,
                }
            },

            {
                $lookup:
                {
                    from: "types",
                    localField: "type",
                    foreignField: "_id",
                    as: "type"
                }
            },
            {
                $set: {
                    type: "$type.type",
                    comment: "$type.comment",
                }
            },
            {
                $out: "resultats"
            },
        ])
        const resutl = await Res.find({})
        res.json(resutl);
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
//get  all Applications by Services contoller
exports.allMinfosbyService = async (req, res) => {
    try {
        const count = await Minfo.aggregate([
            {
                $group: {
                    _id: {
                        r: "$domaine",
                        b: "$service"
                    },
                    cnt: {
                        $sum: 1
                    }
                }
            },
            {
                $project: {
                    a: [
                        {
                            // k: "$_id.r",
                            "k": {
                                "$ifNull": [
                                    "$_id.r",
                                    "replacement-_id.r"
                                ]
                            },
                            v: "$cnt"
                        }
                    ],
                    service: "$_id.b",
                    _id: 0
                }
            },
            {
                $project: {
                    d: {
                        $arrayToObject: "$a"
                    },
                    service: 1
                }
            },
            {
                $group: {
                    _id: "$service",
                    domaine: {
                        $push: "$d"
                    }
                }
            },
            {
                $project: {
                    sm: {
                        $size: "$domaine"
                    },
                    domaine: 1
                }
            },
            {
                $project: {
                    _id: 0,
                    service: "$_id",
                    "options": {
                        $mergeObjects: "$domaine"
                    },
                    sum: {
                        $add: [
                            "$sm",
                            1
                        ]
                    }
                }
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [
                            "$$ROOT",
                            "$options"
                        ]
                    }
                }
            },
            {
                $project: {
                    options: 0
                }
            },
            {
                $lookup:
                {
                    from: "services",
                    localField: "service",
                    foreignField: "_id",
                    as: "service"
                },
            },
            {
                $set: {
                    service: "$service.nomService",
                }
            },
        ])
        res.json(count);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}