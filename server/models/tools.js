const mongoose = require("mongoose");

const tools = mongoose.Schema(
	{
		title: String,
		description: String,
		price: String,
		categorie: String,
		pictures: Array,
		available: { type: Boolean, default: true },
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "User",
		},
	},
	{
		timestampes: true,
	},
	{ versionKey: false }
);

module.exports = mongoose.model("Tools", tools);
