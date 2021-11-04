const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const minfoSchema = new Schema({
    type: { type: Schema.Types.ObjectId, ref: 'type' },
    Marque: { type: Schema.Types.ObjectId, ref: 'marques' },
    service: { type: Schema.Types.ObjectId, ref: 'service' },
    owner: { type: Schema.Types.ObjectId, ref: 'owners' },
    ram: { type: Schema.Types.ObjectId, ref: 'ram' },
    systeme: { type: Schema.Types.ObjectId, ref: 'systeme' },
    application: { type: Schema.Types.ObjectId, ref: 'application' },
    domaine: { type: String },
    SerialNumber: { type: String },
    situation: { type: String }
}, {
    versionKey: false,
    timestamps: true
});
// minfoSchema.plugin(uniqueValidator)
const Minfo = mongoose.model('minfo', minfoSchema);

module.exports = Minfo;