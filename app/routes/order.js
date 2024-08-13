const express = require("express");
const router = express.Router();
const { checkAccessToken } = require("../middlewares");
const { getOrder, createNewOrder } = require("../controllers");

router.get("/order", checkAccessToken, getOrder);
router.post("/order", checkAccessToken, createNewOrder);

module.exports = router;
