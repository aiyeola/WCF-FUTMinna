const mongoose = require("mongoose");
require("./submitdata");


mongoose.connect(
  "mongodb://localhost:27017/BioDataForm",
  { useNewUrlParser: true },
  error => {
    if (!error) {
      console.log("Successfully connected to database");
    } else {
      console.log("Error connecting to database");  
    }
  }
);