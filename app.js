const express = require("express");
require("dotenv").config();
require("./models");
const app = express();
const path = require("path");
const Handlebars = require("handlebars");
const expressHandlebars = require("express-handlebars");
const {
  allowInsecurePrototypeAccess
} = require("@handlebars/allow-prototype-access");
const bodyparser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index");
const adminRoutes = require("./routes/admin");
const adminRegisterRoutes = require("./routes/admin_register");
const databaseRoutes = require("./routes/database");
const morgan = require("morgan");
const errorHandler = require("errorhandler");

app.use(morgan("dev"));
app.use(
  bodyparser.urlencoded({
    extended: true
  })
);
app.use(bodyparser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method == "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST");
    return res.status(200).json({});
  }
  next();
});

if ("development" === app.get("env")) {
  app.use(errorHandler());
}

app.set("views", path.join(__dirname, "views"));

app.engine(
  "hbs",
  expressHandlebars({
    extname: "hbs",
    defaultLayout: "mainLayout",
    layoutsDir: __dirname + "/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
  })
);

app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname + "/public")));

app.use("/", indexRoutes);
app.use("/admin_register", adminRegisterRoutes);
app.use("/admin", adminRoutes);
app.use("/database", databaseRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server started, listening on ${PORT}`);
});
