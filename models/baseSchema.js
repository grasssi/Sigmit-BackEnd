const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseSchema = new Schema({
    Nom_Base: { type: String, required: true },
    id_Base: { type: String, required: true, unique: true }
    //h
}, {
    versionKey: false,
    timestamps: true
});

const Base = mongoose.model('base', baseSchema);

module.exports = Base;