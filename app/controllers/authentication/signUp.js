const {
  authenticationDataValidator,
  encryptPassword,
  generateAccessToken,
} = require("./helper");
const User = require("../../models/User");

const signUp = async (req, res) => {
  try {
    const validationResult = authenticationDataValidator(req.body);
    if (!validationResult) {
      return res
        .status(400)
        .send({ message: "Email and password are required." });
    }

    req.body.password = await encryptPassword(req.body.password);

    const user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send({
        message: "User with this email already exists.",
      });
    }

    const newUser = await new User(req.body).save();

    const accessToken = generateAccessToken(user);
    if (!accessToken) {
      return res
        .status(500)
        .send({ message: "Some error occured. Please try again later." });
    }

    return res
      .status(200)
      .cookie("Authorization", `${accessToken}`, {
        httpOnly: true,
        secure: true,
        sameSite: "none",
        path: "/",
        maxAge: 6 * 60 * 60 * 1000,
      })
      .setHeader("Authorization", `${accessToken}`)
      .send({ message: "Sign up successful.", data: accessToken });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { signUp };
