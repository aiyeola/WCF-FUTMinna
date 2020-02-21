const express = require("express");
const router = express.Router();

const {
  render_index,
  insert_record,
  render_new_request
} = require("../controllers/index");

router.get("/", render_index);

router.post("/", insert_record);

router.get("/new_request", render_new_request);

module.exports = router;
