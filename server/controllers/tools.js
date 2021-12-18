var mongoose = require("mongoose");
var Tools = require("../models/tools");
var bcrypt = require("bcrypt");

module.exports = {
	find_all_tools: async (req, res) => {
		try {
			const tools = await Tools.find().select("");
			res.send(tools);
		} catch (err) {
			res.send(err);
		}
	},
};