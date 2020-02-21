const mongoose = require("mongoose");
require("./bioForm");
require("./admin");
const dbUri = "mongodb://localhost:27017/BioDataForm";
// process.env.MONGODB_URI ||
mongoose.connect(
  dbUri,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false },
  error => {
    if (!error) {
      console.log("Successfully connected to MongoDB");
    } else {
      console.log(`Error connecting to database: ${error}`);
    }
  }
);
