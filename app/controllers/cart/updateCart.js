const Cart = require("../../models/cart");
const Product = require("../../models/product");

const updateCart = async (req, res) => {
  try {
    const { products } = req.body;

    // Check products
    if (!products || !Array.isArray(products)) {
      return res.status(400).send({ message: "Invalid products." });
    }

    // Remove all existing products from cart
    await Cart.deleteMany({ user: req.user._id });

    // check if products are valid
    const productIds = products.map((product) => product.productId);
    console.log(productIds);
    const validProducts = await Product.find({ _id: { $in: productIds } });
    console.log(validProducts);
    if (validProducts.length !== products.length) {
      return res.status(400).send({ message: "Invalid products." });
    }

    // Create a new cart
    const newCart = await new Cart({
      user: req.user._id,
      products: products.map((product) => ({
        product: product.productId,
        quantity: product.quantity,
      })),
    }).save();

    return res
      .status(200)
      .send({ message: "Successfully updated cart.", data: newCart });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { updateCart };
