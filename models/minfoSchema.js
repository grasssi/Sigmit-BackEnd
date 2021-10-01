const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    nom: { type: String, required: true },
    ref: { type: String, required: true, unique: true }
}, {
    versionKey: false,
    timestamps: true
});
minfoSchema.plugin(uniqueValidator)
const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;