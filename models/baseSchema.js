const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const baseSchema = new Schema({
    nomBase: { type: String, required: true,unique:true},
  }, {
    versionKey: false,
    timestamps: true
});

const Base = mongoose.model('base', baseSchema);

module.exports = Base;