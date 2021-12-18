var express = require("express");
var mongoose = require("mongoose");
var users = require("./routers/users")
var admin = require("./routers/admin")
var app = express();
var cors = require("cors");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", users)
app.use("/admin",admin)

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/rentingTools");
app.listen(port, function () {
	console.log(`listening on port http://localhost:${port} !`);
});
