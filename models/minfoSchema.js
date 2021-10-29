const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    type: { type: String, required: true },
    Marque: { type: String },
    service: { type: String, required: true},
    SerialNumber: { type: String, required: true } ,               
    owner: { type: String, required: true },
    ram: { type: String, required: true },
    systeme: { type: String, required: true },
    domaine: { type: String, required: true},
    application: { type: String, required: true },
    situation: { type: String, required: true }  
}, {
    versionKey: false,
    timestamps: true
});
minfoSchema.plugin(uniqueValidator)
const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;