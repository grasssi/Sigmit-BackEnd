const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const baseSchema = new Schema({
  nomBase: { type: String, required: true, unique: true },
}, {
  versionKey: false,
  timestamps: true
});
baseSchema.plugin(uniqueValidator)
const Base = mongoose.model('base', baseSchema);

module.exports = Base;