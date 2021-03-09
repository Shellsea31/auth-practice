const { Blog } = require("../models");

module.exports = {
  test: (req, res) => {
    res.send("success");
  },
  getAll: async (req, res) => {
    try {
      const allBlogs = await Blog.find();
      console.log(allBlogs);
      res.json(allBlogs);
    } catch (err) {
      console.log(err);
    }
  },

  findOne: async (req, res) => {
    try {
      const foundBlogPost = await Blog.findById(req.params.id);
      res.json(foundBlogPost);
    } catch (err) {
      console.log(err);
    }
  },

  postBlog: async (req, res) => {
    try {
      const newBlogPost = new Blog({
        title: req.body.title,
        text: req.body.text,
      });

      res.json(await newBlogPost.save());
    } catch (err) {
      console.log(err);
    }
  },

  deleteOne: async (req, res) => {
    try {
      res.json(await Blog.findByIdAndDelete(req.params.id));
    } catch (err) {
      console.log(err);
    }
  },

  updateOne: async (req, res) => {
    res.json("success");
  },
};
