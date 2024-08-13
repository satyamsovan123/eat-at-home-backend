const { signIn } = require("../controllers/authentication/signIn");
const { signUp } = require("../controllers/authentication/signUp");
const { forgotPassword } = require("./authentication/forgotPassword");
const { getCart } = require("./cart/getCart");
const { updateCart } = require("./cart/updateCart");
const { createNewOrder } = require("./order/createNewOrder");
const { getOrder } = require("./order/getOrder");
const { getProduct } = require("./product/getProduct");

module.exports = {
  signUp,
  signIn,
  forgotPassword,
  getCart,
  getProduct,
  updateCart,
  createNewOrder,
  getOrder,
};
