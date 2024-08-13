const User = require("../../models/User");

const forgotPassword = async (req, res) => {
  try {
    return res.status(200).send({ message: "Password reset was successful." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { forgotPassword };
