const Cart = require("../../models/cart");
const getCart = async (req, res) => {
  try {
    const cart = await Cart.find({ user: req.user._id })
      .populate("products.product")
      .sort({ createdAt: -1 })
      .limit(1);

    return res
      .status(200)
      .send({ message: "Successfully fetched cart.", data: cart });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { getCart };
