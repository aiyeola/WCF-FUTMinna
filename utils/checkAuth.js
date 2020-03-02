const { verify } = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const authorization = req.header["Authorization"];
    console.log(authorization)
    if (!authorization) throw new Error("You need to log in");
    const token = authorization.split(" ")[1];
    const { userId } = verify(token, process.env.ACCESS_TOKEN_SECRET);
    // send this decoded userId to the req body of the next middleware
    next();
  } catch (error) {
    console.log(error);
    res.send({
      error: `${error.message}`
    });
  }
};

module.exports = { checkAuth };
