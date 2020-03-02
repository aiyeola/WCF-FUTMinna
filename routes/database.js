const express = require("express");
const router = express.Router();
const { checkAuth } = require("../utils/checkAuth")

const { render_student_data } = require("../controllers/database");

router.get("/",  render_student_data);

module.exports = router;
