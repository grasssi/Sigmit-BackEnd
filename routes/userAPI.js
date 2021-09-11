const express = require('express');
const router = express.Router();
// reuire model
const User = require('../models/userShema')

// get all user
router.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})
// get one user by id
router.get('/users/:id', async (req, res) => {
    try {
    const user = await User.findById(req.params.id)
    res.json(user);
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})
// add one user
router.post('/users', async (req, res) => {
    try {
    const createdUser = await User.create(req.body)
    res.json(createdUser);
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})
// update user by id
router.put('/users/:id', async (req, res) => {
      try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
    res.json(updatedUser);
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})

// delete user by id
router.delete('/users/:id', async (req, res) => {
    try {
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'deleted user successfully' });
}
catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Internal server error' });
}
})

// get all user
router.get('/users-with-todos', async (req, res) => {
    try {
        const users = await User.find({}).populate('todos', "name -_id createdAt");
        res.json(users);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    }
})
module.exports = router;