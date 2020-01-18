const mongoose = require("mongoose");

var bioSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "Required"
  },
  department: {
    type: String
  },
  level: {
    type: Number
  },
  contactNumber1: {
    type: Number
  },
  contactNumber2: {
    type: Number
  },
  hobbies: {
    type: String
  },
  mentors: {
    type: String
  }
});

const bioForm = mongoose.model("bioForm", bioSchema); 
// first parameter is the name of the collection and also the model name
// second parameter is the schema to be used for the model
module.exports = bioForm;
