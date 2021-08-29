const mongoose = require("mongoose");
const pharmacy = require("./pharmacyModel");

const { Schema } = mongoose;
const { ObjectId } = Schema.Types;
const medicine = new mongoose.Schema({
  medName: {
    type: String,
    required: true,
    unique: false,
    minlength: 5,
    maxlength: 50,
  },
  medType: {
    type: Number,
    required: true,
    unique: false,
    minlength: 10,
    maxlength: 12,
  },
  medPrice: {
    type: Number,
    required: true,
  },
  manufactureDate: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: String,
    required: true,
  },
  pharmacy: {
    type: ObjectId,
    ref: "pharmacyTable",
  },
});

module.exports = mongoose.model("medicineTable", medicine);
