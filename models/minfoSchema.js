const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    Nom: { type: String, required: true },
}, {
    versionKey: false,
    timestamps: true
});

const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;