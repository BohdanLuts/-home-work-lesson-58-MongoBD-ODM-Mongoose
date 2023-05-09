const mongoose = require('mongoose');

const phoneSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 32,
    },
    brand: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 32,
    },
    year: {
      type: String,
      required: true,
      match: /^[0-9]{4}$/,
    },
    ram: {
      type: Number,
      required: true,
    },
    screenDiagonal: {
      type: Number,
      required: true,
      min: 0,
    },
    hasNfc: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Phone = mongoose.model('Phone', phoneSchema);
module.exports = Phone;
