const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    nom: { type: String, required: true },
    ref: { type: String, required: true, unique: true }
}, {
    versionKey: false,
    timestamps: true
});

const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;