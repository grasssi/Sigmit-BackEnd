const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    service: { type: String, required: true } 
}, {
    versionKey: false,
    timestamps: true
});

const owner = mongoose.model('owners', ownerSchema);

module.exports = owner;