const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const marqueSchema = new Schema({
  marque: { type: String, required: true, unique: true },
}, {
  versionKey: false,
  timestamps: true
});
marqueSchema.plugin(uniqueValidator)
const Marque = mongoose.model('marque', marqueSchema);

module.exports = Marque;