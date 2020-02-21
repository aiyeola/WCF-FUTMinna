const { sign } = require("jsonwebtoken");

const createAccessToken = (username, userId) => {
  return sign({ username, userId }, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: "15m"
  });
};

const createRefreshToken = (username, userId) => {
  return sign({ username, userId }, process.env.REFRESH_TOKEN_SECRET, {
    expiresIn: "7d"
  });
};

const sendAccessToken = (req, res, accessToken) => {
  res.send({
    accessToken,
    username: req.body.username
  });
};

const sendRefreshToken = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    path: "/"
  });
};

module.exports = {
  createAccessToken,
  createRefreshToken,
  sendAccessToken,
  sendRefreshToken
};
