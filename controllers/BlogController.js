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
};
