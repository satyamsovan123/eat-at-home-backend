const jwt = require("jsonwebtoken");

const checkAccessToken = async (req, res, next) => {
  try {
    const accessToken =
      req.header("Authorization") || req.cookies.Authorization;

    if (!accessToken) {
      return res.status(401).send({ message: "Access denied." });
    }
    const decodedToken = jwt.verify(accessToken, process.env.JWT_SECRET);
    req.user = decodedToken.user;
    next();
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { checkAccessToken };
