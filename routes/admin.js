const express = require("express");
const router = express.Router();
const { checkAuth } = require("../utils/checkAuth");

const {
  render_admin,
  login_admin,
} = require("../controllers/admin");

router.get("/", render_admin);

router.post("/", login_admin);



module.exports = router;
