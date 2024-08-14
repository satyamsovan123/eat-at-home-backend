const User = require("../../models/User");

const {
  authenticationDataValidator,
  comparePassword,
  generateAccessToken,
} = require("./helper");

const signIn = async (req, res) => {
  try {
    const validationResult = authenticationDataValidator(req.body);
    if (!validationResult) {
      return res
        .status(400)
        .send({ message: "Email and password are required." });
    }

    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).send({ message: "Invalid email or password." });
    }

    const isPasswordValid = await comparePassword(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(400).send({ message: "Invalid email or password." });
    }

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
      .send({ message: "Sign in successful.", data: accessToken });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { signIn };
