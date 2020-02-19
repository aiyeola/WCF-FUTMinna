const BioForm = require("../models/submitData");

exports.render_student_data = (req, res) => {
  BioForm.find((err, docs) => {
    if (!err) {
      res.render("database", {
        data: docs
      });
    } else console.log("Error in retrieving student database: " + err);
  });
};
