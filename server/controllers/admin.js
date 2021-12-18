var mongoose = require("mongoose");
var Tools = require("../models/tools");

module.exports = {
    find_all_tools: async (req, res) => {
        try {
            const users = await Tools.find()
            res.send(users);
        } catch (err) {
            res.send(err);
        }
    },
    delete_tool: async (req, res) => {


    }
}