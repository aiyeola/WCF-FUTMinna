const express = require("express");
require("dotenv").config();
require("./models");
const app = express();
const path = require("path");
const expressHandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const routes = require("./controllers/routes");
const morgan = require("morgan");
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
<<<<<<< HEAD
=======

>>>>>>> cdca166be9757c60f0af2747a81d9e058a724c76
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
app.use(express.static("src"));
app.use("/", routes);
app.listen(process.env.PORT, () => {
  console.log(`Server started, listening on ${process.env.PORT}`);
});
