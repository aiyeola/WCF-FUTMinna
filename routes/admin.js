const express = require("express");
const router = express.Router();

const AdminController = require("../controllers/admin");

router.get("/", AdminController.render_admin);

module.exports = router;
