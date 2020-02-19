const BioForm = require("../models/submitData"); // schema for the collection 'bioForm'

exports.render_index = (req, res) => res.render("index");

exports.insert_record = (req, res) => {
  const {
    fullName,
    department,
    email,
    level,
    contactNumber1,
    contactNumber2,
    sex,
    campus
  } = req.body;

  const bioForm = new BioForm({
    fullName,
    department,
    email,
    level,
    contactNumber1,
    contactNumber2,
    sex,
    campus
  });

  bioForm.save((err, doc) => {
    if (!err) res.redirect("/new_request");
    else {
      console.log("Error during record insertion : " + err);
    }
  });
};

exports.render_new_request = (req,res) => res.render("new_response")