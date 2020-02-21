const BioForm = require("../models/bioForm"); // schema for the collection 'bioForm'

const render_index = (req, res) => res.render("index");

const insert_record = (req, res) => {
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

  bioForm
    .save()
    .then(res.redirect("/new_request"))
    .catch(error => `Error inserting record: ${error}`);
};

const render_new_request = (req, res) => res.render("new_response");

module.exports = {
  render_index,
  insert_record,
  render_new_request
};
