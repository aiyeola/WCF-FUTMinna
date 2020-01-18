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
const PORT = process.env.PORT || 8080;

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

app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts"
  })
);

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname + "/public")));

app.use("/", routes);

app.listen(PORT, () => {
  console.log(`Server started, listening on ${PORT}`);
});
