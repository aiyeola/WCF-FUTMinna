const express = require("express");
const fs = require("fs");
const mongoose = require("mongoose");
const router = express.Router();
const bioData = mongoose.model("bioForm"); // schema for the collection 'bioForm'


router.get("/", (req, res) => {
  res.render("index");
});

router.post("/", (req, res) => {
  let bioForm = new bioData();
  // var imgpath = "./uploads/";
  // bioForm.img.data = fs.readFileSync(imgpath);
  // bioForm.img.contentType = "image/png";
  (bioForm.displayPic = req.body.displayPic),
    (bioForm.fullName = req.body.fullName),
    (bioForm.department = req.body.department),
    (bioForm.email = req.body.email),
    (bioForm.contactNumber1 = req.body.contactNumber1),
    (bioForm.contactNumber2 = req.body.contactNumber2),
    (bioForm.hobbies = req.body.hobbies);
  // remains for the passport upload -- line 14
  bioForm.save((err, doc) => {  
    if (!err) {
      res.redirect("/new");
    } else {
      res.send("error occured");
    }
  });
});

router.get("/new", (req, res) => {
  res.render("index2");
});
module.exports = router;
