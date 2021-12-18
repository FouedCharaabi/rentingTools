const express = require("express");
const router = express.Router();
const AdminController = require("../controllers/admin");

router
	.route("/")
	.get(AdminController.find_all_tools)
	

router.route("/admin")
.delete(AdminController.delete_tool);


module.exports = router;