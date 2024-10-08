const express = require("express");
const router = express.Router();
const { getCart, updateCart } = require("../controllers");
const { checkAccessToken } = require("../middlewares");

router.get("/cart", checkAccessToken, getCart);
router.put("/cart", checkAccessToken, updateCart);

module.exports = router;
