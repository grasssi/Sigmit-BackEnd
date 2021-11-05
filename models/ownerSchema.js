const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const ownerSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: false },
    service: { type: Schema.Types.ObjectId,ref:'service' }
}, {
    versionKey: false,
    timestamps: true
});
ownerSchema.plugin(uniqueValidator)
const owner = mongoose.model('owners', ownerSchema);

module.exports = owner;