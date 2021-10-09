const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
  nomService: { type: String, unique: true, required: true },
  owners:[{type:Schema.Types.ObjectId,ref:'owners'}]
}, {
  versionKey: false,
  timestamps: true
});
serviceSchema.plugin(uniqueValidator);

const Service = mongoose.model('service', serviceSchema);

module.exports = Service;