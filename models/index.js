const mongoose = require("mongoose");
require("./submitData");
// "mongodb://localhost:27017/BioDataForm";
const connectionUrl =  process.env.MONGODB_URI || "mongodb://localhost:27017/BioDataForm";

mongoose.connect(
  connectionUrl,
  { useNewUrlParser: true, useUnifiedTopology: true },
  error => {
    if (!error) {
      console.log("Successfully connected to MongoDB");
    } else {
      console.log(`Error connecting to database: ${error}`);
    }
  }
);
