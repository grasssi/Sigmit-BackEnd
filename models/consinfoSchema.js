const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const consinfoSchema = new Schema({
  nomCons: { type: String, required: true, unique: true },
  minfo:[{type:Schema.Types.ObjectId,ref:'minfo'}]
}, {
  versionKey: false,
  timestamps: true
});
consinfoSchema.plugin(uniqueValidator)
const Consinfo = mongoose.model('consinfo', consinfoSchema);

module.exports = Consinfo;