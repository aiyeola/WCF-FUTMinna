const Admin = require("../models/admin");
const { hash, compare } = require("bcryptjs");
const {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken
} = require("../utils/tokens");

const render_admin = (req, res) => {
  res.clearCookie("refreshToken", { path: "/" });
  res.render("admin");
};

const render_admin_register = (req, res) => res.render("admin_register");

const register_admin = async (req, res) => {
  const { username, password } = req.body;
  try {
    // check if user exists in database
    const user = await Admin.find({ username });

    if (user.length >= 1) throw new Error("User exists");
    // if user doesn't exist, hash password
    const hashedPassword = await hash(password, 10);

    // save password to database
    const admin = new Admin({
      username,
      password: hashedPassword
    });
    await admin
      .save()
      .then(res.redirect("/admin"))
      .catch(error => `Error creating Admin record: ${error}`);
    // send response that user is created
  } catch (error) {
    console.log(error);

    res.send({
      error: `${error.message}`
    });
  }
};

const login_admin = async (req, res) => {
  const { username, password } = req.body;
  try {
    // find user in the database, if user doesn't exists send error
    const user = await Admin.findOne({ username: username });

    if (user.length < 1) throw new Error("username not found");
    // compare crypted password and see if it checks out
    // send error if not
    const valid = await compare(password, user.password);
    if (!valid) throw new Error("password not correct");
    // create a refresh and access token
    const accessToken = createAccessToken(user._id);
    const refreshToken = createRefreshToken(user._id);
    // put the refresh token in the database
    const update = await Admin.findByIdAndUpdate(
      { _id: user._id },
      { $set: { refreshToken } }
    );
    if (!update)
      throw new Error(" refresh token has not been entered into database");
    // send refreshToken as a cookie and
    // send access token to  the authorization header
    sendRefreshToken(res, refreshToken);
    sendAccessToken(req, res, accessToken);
  } catch (error) {
    console.log(error);
    res.send({
      error: `${error.message}`
    });
  }
};

module.exports = {
  render_admin,
  login_admin,
  render_admin_register,
  register_admin
};
