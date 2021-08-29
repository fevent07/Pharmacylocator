const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const singUp = require("./routes/signIn");
const medicineManagement = require("./routes/medicine");
const app = express();
dotenv.config();

mongoose
  .connect("mongodb://localhost/pharmacy", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => console.log("Connected to MongoDb ..."))
  .catch((error) => console.log("could not connect to database" + error));

app.use(express.json());
app.use(cors());
app.use("/app", singUp);
app.use("/app/", medicineManagement);
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`listening to port ${port}`));
