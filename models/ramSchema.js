const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const ramSchema = new Schema({
    capacite: { type: String, required: true,unique:true },
  }, {
    versionKey: false,
    timestamps: true
});
ramSchema.plugin(uniqueValidator)
const Ram = mongoose.model('ram', ramSchema);

module.exports = Ram;