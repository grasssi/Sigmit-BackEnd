const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    type: { type: Schema.Types.ObjectId, ref: 'type', count: true },
    Marque: { type: Schema.Types.ObjectId, ref: 'marques' },
    service: { type: Schema.Types.ObjectId, ref: 'service' },
    owner: { type: Schema.Types.ObjectId, ref: 'owners', count: true },
    ram: { type: Schema.Types.ObjectId, ref: 'ram' },
    systeme: { type: Schema.Types.ObjectId, ref: 'systeme' },
    application: { type: Schema.Types.ObjectId, ref: 'application' },
    typecons: { type: Schema.Types.ObjectId, ref: 'consinfo' },
    date: { type: String, format: Date },
    place: { type: String },
    domaine: { type: String },
    SerialNumber: { type: String },
    situation: { type: String }
}, {
    versionKey: false,
    timestamps: true,
});
// minfoSchema.plugin(uniqueValidator)
const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;