const mongoose = require("mongoose");

var db = {};

db.mongoose = mongoose;
db.club = require("./test.model");

module.exports = db;

