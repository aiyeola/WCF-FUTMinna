const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const bioData = mongoose.model("bioForm"); // schema for the collection 'bioForm'

router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  let bioForm = new bioData();
    (bioForm.fullName = req.body.fullName),
    (bioForm.department = req.body.department),
    (bioForm.level = req.body.level),
    (bioForm.contactNumber1 = req.body.contactNumber1),
    (bioForm.contactNumber2 = req.body.contactNumber2),
    (bioForm.hobbies = req.body.hobbies),
    (bioForm.mentors = req.body.mentors);
    
  bioForm.save((doc, err) => {
    if (!err) {
      res.redirect("/newRequest");
    } else {
      res.send("error occurred");
    }
  });
});

router.get("/newRequest", (req, res) => {
  res.render("index2");
});
module.exports = router;
