const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const systemeSchema = new Schema({
    systeme: { type: String, required: true,unique:true },
  }, {
    versionKey: false,
    timestamps: true
});
systemeSchema.plugin(uniqueValidator)
const Systeme = mongoose.model('systeme', systemeSchema);

module.exports = Systeme;