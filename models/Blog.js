const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
  title: {
    type: "String",
    trim: true,
    required: "title is required",
  },
  text: { type: "String", trim: true, required: "text is required" },
});

const Blog = mongoose.model("Blog", BlogSchema);

module.exports = Blog;
