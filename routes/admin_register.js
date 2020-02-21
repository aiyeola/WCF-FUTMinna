const express = require("express");
const router = express.Router();

const {
  render_admin_register,
  register_admin
} = require("../controllers/admin");

router.get("/", render_admin_register);

router.post("/", register_admin);

module.exports = router;
