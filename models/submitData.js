const mongoose = require("mongoose");

var bioSchema = new mongoose.Schema({
  img: {
    data: Buffer,
    contentType: String
  },
  fullName: {
    type: String,
    required: "Required"
  },
  department: {
    type: String
  },
  email: {
    type: String
  },
  contactNumber1: {
    type: Number
  },
  contactNumber2: {
    type: Number
  },
  hobbies: {
    type: String
  }
});

const bioForm = mongoose.model("bioForm", bioSchema); 
// first parameter is the name of the collection and also the model name
// second parameter is the schema to be used for the model
module.exports = bioForm;
