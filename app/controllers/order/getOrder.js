const Order = require("../../models/order");
const getOrder = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.user._id }).populate("cart");

    return res
      .status(200)
      .send({ message: "Successfully fetched all orders.", data: orders });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { getOrder };
