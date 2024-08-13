const express = require("express");
const router = express.Router();

const baseURL = "/api/v1";
router.use(baseURL, require("./authentication"));
router.use(baseURL, require("./cart"));
router.use(baseURL, require("./product"));
router.use(baseURL, require("./order"));

router.get(baseURL, (req, res) => {
  try {
    return res.status(200).send({ message: "Server is running." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
});

router.use("*", (req, res) => {
  try {
    return res.status(200).send({ message: "Invalid route." });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .send({ message: "Some error occured. Please try again later." });
  }
});

module.exports = router;
