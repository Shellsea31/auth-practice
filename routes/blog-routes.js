const router = require("express").Router();
const { test, getAll, postBlog } = require("../controllers/BlogController");

router.get("/", getAll);
router.post("/", postBlog);

module.exports = router;
