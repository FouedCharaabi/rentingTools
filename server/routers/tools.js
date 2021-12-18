const express = require("express");
const router = express.Router();
const ToolController = require("../controllers/tools");

router
	.route("/")
	.get(ToolController.find_all_tools)
	.post(ToolController.create_a_tool);

router.route("/login")
.post(ToolController.login_a_tool);
router.route("/signup")
	.post(ToolController.create_a_tool);
	
module.exports = router;