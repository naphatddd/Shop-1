const express = require("express");
const router = express.Router();
const shopController = require("../controllers/shopController");

//127.0.0.1:3000/api/shop/
http: router.get("/", shopController.index);

//http://127.0.0.1:3000/api/shop/id
router.get("/:id", shopController.getShopWithMenu);

//http://127.0.0.1:3000/api/shop/id
router.post("/", shopController.insert);

module.exports = router;
