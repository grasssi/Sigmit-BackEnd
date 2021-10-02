const User = require('../models/userShema')

// get all users
exports.allUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//add one user
exports.addUser = async (req, res) => {
    try {
        //hash password
        const createdUser = await User.create(req.body)
        res.json(createdUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

//update user by id
exports.updateUser = async (req, res) => {
    try {
        //hash password
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        res.json(updatedUser);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}

// remove user by id
exports.removeUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id)
        res.json({ message: 'deleted user successfully' });
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
}