const express = require("express");
const router = express.Router();
const BioForm = require("../models/submitData"); // schema for the collection 'bioForm'

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  insertRecord(req, res);
});

const insertRecord = (req, res) => {
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
  BioForm.find((err, docs) => {
    if (!err) {
      res.render("database", {
        data: docs
      });
    } else console.log("Error in retrieving student database: " + err);
  });
});

module.exports = router;
