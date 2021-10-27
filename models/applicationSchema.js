const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

const applicationSchema = new Schema({
    application: { type: String, required: true,unique:true },
  }, {
    versionKey: false,
    timestamps: true
});
applicationSchema.plugin(uniqueValidator)
const Application = mongoose.model('application', applicationSchema);

module.exports = Application;