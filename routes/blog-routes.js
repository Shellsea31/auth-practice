const router = require("express").Router();
const { test } = require("../controllers/BlogController");

router.get("/", test);

module.exports = router;
