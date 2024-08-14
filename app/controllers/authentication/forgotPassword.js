const User = require("../../models/User");

const forgotPassword = async (req, res) => {
  try {
    if (!req.body.email) {
      return res.status(400).send({ message: "Email is required." });
    }

    if (
      !req.body.password ||
      !req.body.confirmPassword ||
      req.body.password !== req.body.confirmPassword
    ) {
      return res.status(400).send({
        message:
          "Password and confirm password should be same and are required.",
      });
    }

    req.body.password = await encryptPassword(req.body.password);

    await User.findOneAndUpdate(
      { email: req.body.email },
      { password: req.body.password }
    );

    return res.status(200).send({ message: "Password reset was successful." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { forgotPassword };
