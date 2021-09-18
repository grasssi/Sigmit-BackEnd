const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseSchema = new Schema({
    nomBase: { type: String, required: true },
  }, {
    versionKey: false,
    timestamps: true
});

const Base = mongoose.model('base', baseSchema);

module.exports = Base;