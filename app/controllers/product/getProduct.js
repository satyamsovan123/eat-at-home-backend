const Product = require("../../models/product");
const getProduct = async (req, res) => {
  try {
    const products = await Product.find({});
    return res
      .status(200)
      .send({ message: "Successfully fetched all products.", data: products });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

const addProducts = async () => {
  const sampleProducts = [
    {
      name: "Product 1",
      price: "100",
      photo: "https://via.placeholder.com/100",
    },
    {
      name: "Product 2",
      price: "200",
      photo: "https://via.placeholder.com/200",
    },
    {
      name: "Product 3",
      price: "300",
      photo: "https://via.placeholder.com/300",
    },
  ];

  sampleProducts.forEach(async (product) => {
    const newProduct = await new Product(product).save();
  });
};

module.exports = { getProduct };
