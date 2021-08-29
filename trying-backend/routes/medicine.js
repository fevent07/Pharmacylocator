const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const medicineCopy = require("../models/medicineModel");
const pharmacyCopy = require("../models/pharmacyModel");

app.post("/add-med", async (request, response) => {
  const newMedicine = new medicineCopy({
    medName: request.body.medName,
    medType: request.body.medType,
    medPrice: request.body.medPrice,
    manufactureDate: request.body.manufactureDate,
    expirationDate: request.body.expirationDate,
  });

  const result = await newMedicine.save(function (err) {
    if (err) return handleError(err);

    const story1 = new Story({
      title: "Casino Royale",
      author: author._id, // assign the _id from the person
    });

    console.log(result);
    response.status(200).send("done");
  });
});

app.post("/showMed", (request, response) => {});
module.exports = app;
