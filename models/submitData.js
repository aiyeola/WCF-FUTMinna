const mongoose = require("mongoose");

var bioSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: "This field is required"
  },
  department: {
    type: String
  },
  email: {
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
  },
  campus: {
    type: String
  }
});
// Custom Validation for email
bioSchema.path("email").validate((val) =>{
  emailRegex = /\n/ // Still to implement the regex for email 
  return emailRegex.test(val)
}, "Invalid email")


const bioForm = mongoose.model("bioForm", bioSchema);
// first parameter is the name of the collection and also the model name
// second parameter is the schema to be used for the model
module.exports = bioForm;
