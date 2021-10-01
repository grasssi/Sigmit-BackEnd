const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const typeSchema = new Schema({
    type: { type: String, required: true,unique:true },
}, {
    versionKey: false,
    timestamps: true
});
typeSchema.plugin(uniqueValidator)
const Minfo = mongoose.model('type', typeSchema);

module.exports = Minfo;