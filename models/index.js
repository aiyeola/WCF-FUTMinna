const mongoose = require("mongoose");
require("./submitData");
require("dotenv").config();
const connectionUrl =
  "mongodb://localhost:27017/BioDataForm" || process.env.MONGODB_URI;

mongoose.connect(connectionUrl, { useNewUrlParser: true }, error => {
  if (!error) {
    console.log("Successfully connected to MongoDB");
  } else {
    console.log(`Error connecting to database: ${error}`);
  }
});
