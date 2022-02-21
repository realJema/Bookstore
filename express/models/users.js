// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Post = new Schema(
  {
    id: Number,
    username: String,
    password: String,
    email: String,
    profile: String,
    full: String,
    phone: Number,
    wishlist: String,
    likedauthors: String,
    user_status: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
// Caution: schema and model shouldn't have thesame name
module.exports = mongoose.model("artists", Post);
