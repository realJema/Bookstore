// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure
const Post = new Schema(
  {
    id: Number,
    title: String,
    subtitle: String,
    description: String,
    language: String,
    price: Number,
    authorid: Number,
    contributors: String,
    keywords: String,
    status: Boolean,
    path: String,
    cover: String,
    backcover: String,
    isbn: String,
    likes: Number,
    categories: String,
    sales: Number,
    redeemed: Number,
    releasedate: String,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
// Caution: schema and model shouldn't have thesame name
module.exports = mongoose.model("book_list", Post);
