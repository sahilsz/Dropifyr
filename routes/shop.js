const express = require("express");

const router = express.Router();

router.get("/product", (req, res, next) => {
  res.sendFile("../views/shop.html");
});

module.exports = router;
