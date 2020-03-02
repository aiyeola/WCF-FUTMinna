const express = require("express");
const router = express.Router();

const {
  render_admin,
  login_admin,
  render_admin_register,
  register_admin
} = require("../controllers/admin");

router.get("/", render_admin);

router.post("/", login_admin);

router.route("/admin_register").get(render_admin_register);

router.route("/admin_register").post(register_admin);

module.exports = router;
