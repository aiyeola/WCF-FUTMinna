const express = require("express");
const router = express.Router();

const DatabaseController = require("../controllers/database");

router.get("/", DatabaseController.render_student_data);

module.exports = router;
