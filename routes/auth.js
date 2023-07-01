const express = require("express");
const authController = require("../controllers/auth");

const router = express.Router();

router.get("/login", authController.renderLogin);

router.post("/login", authController.postLogin);

router.post("/logout", authController.postLogout);

module.exports = router;
