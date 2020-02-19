const express = require("express");
const router = express.Router();

const IndexController = require("../controllers/index")

router.get("/", IndexController.render_index);

router.post("/", IndexController.insert_record);


router.get("/new_request", IndexController.render_new_request);

module.exports = router;
