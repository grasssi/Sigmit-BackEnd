const Owner = require('../models/ownerSchema')

// get all owners
exports.allOwners = async (req, res) => {
    try {
        const owners = await Owner.find({});
        res.json(owners);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//add one owner
exports.addOwner = async (req, res) => {
    try {
        const createdOwner = await Owner.create(req.body)
        res.json(createdOwner);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update Owner by id
exports.updateOwner = async (req, res) => {
    try {
        const updatedOwner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedOwner);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove Owner by id
exports.removeOwner = async (req, res) => {
    try {
        const deletedOwner = await Owner.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted the owner successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}