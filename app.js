const express = require("express");
const fs = require("fs");
require("./models");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const routes = require("./controllers/routes");
const morgan = require("morgan");
const multer = require("multer");
const errorHandler = require("errorhandler");

app.use(morgan("dev"));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());

if ("development" === app.get("env")) {
  app.use(errorHandler());
}
app.use(
  multer({
    dest: "./uploads/"
  }).single("singleInputFileName")
);
app.set("views", path.join(__dirname, "/views/"));

app.engine(
  "hbs",
  expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
  })
);
app.set("view engine", "hbs");

app.use("/", routes);
app.listen("3000", () => {
  console.log("Server started, listening on 3000");
});
