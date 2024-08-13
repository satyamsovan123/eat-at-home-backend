const getCart = async (req, res) => {
  try {
    return res.status(200).send({ message: "Successfully fetched cart." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
};

module.exports = { getCart };
