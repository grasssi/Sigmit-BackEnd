const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const resultatSchema = new Schema({
    sum: { type:Number },
    Operational: { type:Number },
    repair: { type:Number },
    stock: { type:Number },
    type: { type:Array },
}, {
    versionKey: false,
    timestamps: true,
});
// minfoSchema.plugin(uniqueValidator)
const Res = mongoose.model('resultat', resultatSchema);

module.exports = Res;