const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    age: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
    resetlink: { type: String, default: '' }
}, {
    versionKey: false,
    timestamps: true
});
userSchema.plugin(uniqueValidator)
const User = mongoose.model('users', userSchema);

module.exports = User;