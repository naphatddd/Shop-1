const express = require("express");
const router = express.Router();
const staffController = require("../controllers/staffController");

//http://127.0.0.1:3000/api/staff
router.get("/", staffController.index);

//http://127.0.0.1:3000/api/insert
router.post("/", staffController.insert);

//http://127.0.0.1:3000/api/show
router.get("/:id", staffController.show);

//http://127.0.0.1:3000/api/delete
router.delete("/:id", staffController.destroy);

//http://127.0.0.1:3000/api/update
router.put("/:id", staffController.update);

module.exports = router;
