const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateAccessToken = (user) => {
  try {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });
  } catch (error) {
    console.log(error);
  }
};

const comparePassword = async (password, hashedPassword) => {
  try {
    return bcrypt.compare(password, hashedPassword);
  } catch (error) {
    console.log(error);
  }
};

const encryptPassword = async (password) => {
  try {
    return bcrypt.hash(password, Number(process.env.SALT_ROUNDS));
  } catch (error) {
    console.log(error);
  }
};

const authenticationDataValidator = (data) => {
  let isValid = true;
  if (
    !data.email ||
    !data.password ||
    data.email.length === 0 ||
    data.password.length === 0
  ) {
    isValid = false;
  }

  return isValid;
};

module.exports = {
  generateAccessToken,
  comparePassword,
  encryptPassword,
  authenticationDataValidator,
};
