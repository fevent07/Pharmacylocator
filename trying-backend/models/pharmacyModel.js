const mongoose = require("mongoose");
const medicineCopy = require("./medicineModel");

const pharmacy = new mongoose.Schema({
  pharmacyName: {
    type: String,
    required: true,
    unique: false,
    minlength: 5,
    maxlength: 50,
  },
  phoneNumber: {
    type: Number,
    required: true,
    unique: false,
    minlength: 10,
    maxlength: 12,
  },
  pharmacyType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  openingHr: {
    type: Number,
    required: true,
  },
  closingHr: {
    type: Number,
    required: true,
  },
  TIN_number: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50,
  },
  businessLicense: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: true,
  },
  userName: {
    type: String,
    require: true,
    minlength: 5,
    maxlength: 50,
  },
  password: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

//populate or virtual populate

module.exports = mongoose.model("pharmacyTable", pharmacy);
