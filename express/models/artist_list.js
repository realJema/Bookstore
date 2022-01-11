// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Post = new Schema(
  {
    name: String,
    genre: Array,
    level: String, // upcoming or pro
    label: String,
    upvotes: Number,
    downvotes: Number,
    link: String, 
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
// Caution: schema and model shouldn't have thesame name
module.exports = mongoose.model("artists", Post);
