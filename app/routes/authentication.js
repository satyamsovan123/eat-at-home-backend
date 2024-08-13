const express = require("express");
const router = express.Router();
const { signUp } = require("../controllers");
const { signIn } = require("../controllers");
const { forgotPassword } = require("../controllers");

router.post("/signup", signUp);
router.post("/signin", signIn);
router.patch("/forgot-password", forgotPassword);

module.exports = router;
