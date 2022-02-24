const { Schema, model } = require('mongoose');

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  price: {
    type: Number,
    required: true,
    unique: false,
  },
  tiered: {
    type: Boolean,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Service = model('Service', serviceSchema);

module.exports = Service;
