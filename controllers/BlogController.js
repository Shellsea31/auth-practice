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
};
