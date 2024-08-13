const createNewOrder = async (req, res) => {
  try {
    return res.status(200).send({ message: "Successfully created new order." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { createNewOrder };
