const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bioDataModel = mongoose.model("bioForm"); // schema for the collection 'bioForm'

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  insertRecord(req, res);
});
const insertRecord = (req, res) => {
  let bioForm = new bioDataModel();
  (bioForm.fullName = req.body.fullName),
    (bioForm.department = req.body.department),
    (bioForm.email = req.body.email),
    (bioForm.level = req.body.level),
    (bioForm.contactNumber1 = req.body.contactNumber1),
    (bioForm.contactNumber2 = req.body.contactNumber2),
    (bioForm.sex = req.body.sex),
    (bioForm.campus = req.body.campus);

  bioForm.save((err, doc) => {
    if (!err) res.redirect("/newrequest");
    else {
      console.log("Error during record insertion : " + err);
    }
  });
};
router.get("/newrequest", (req, res) => {
  res.render("index2");
});

router.get("/data", (req, res) => {
  bioDataModel.find((err, docs) => {
    if (!err) {
      res.render("database", {
        data: docs
      });
    } else console.log("Error in retrieving student database: " + err);
  });
});

module.exports = router;
