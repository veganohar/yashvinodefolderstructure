const mongoose = require("mongoose");

const Club = mongoose.model(
    "Club",
    new mongoose.Schema({
            club_name:String,
            club_type:String
    })
)

module.exports = Club;