const { verify } = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  try {
    const decoded = verify(
      req.body.accessToken,
      process.env.ACCESS_TOKEN_SECRET
    );
    req.adminData = decoded;
    next();
  } catch (error) {
    console.log(`Error: ${error}`);
	
  }
};

module.exports = { checkAuth };
