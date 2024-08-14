const Order = require("../../models/order");
const Cart = require("../../models/cart");
const createNewOrder = async (req, res) => {
  try {
    if (!req.body.cartId) {
      return res.status(400).send({ message: "Cart ID is required." });
    }

    const newOrder = await new Order({
      user: req.user._id,
      status: "completed",
      cart: req.body.cartId,
      products: (await Cart.findById(req.body.cartId)).products,
    }).save();

    // Remove the cart
    await Cart.deleteOne({ _id: req.body.cartId });

    return res
      .status(200)
      .send({ message: "Successfully created new order.", data: newOrder });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { createNewOrder };
