const router = require("express").Router();
const {
  test,
  getAll,
  postBlog,
  findOne,
  deleteOne,
  updateOne,
} = require("../controllers/BlogController");

// router.get("/", getAll);
// router.post("/", postBlog);

// condensed
router.route("/").get(getAll).post(postBlog);

// router.get("/:id", findOne);
// router.delete("/:id", deleteOne);
// router.patch("/:id", updateOne);

// condensed
router.route("/:id").get(findOne).delete(deleteOne).patch(updateOne);

module.exports = router;
