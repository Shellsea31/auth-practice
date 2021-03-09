const router = require("express").Router();
const { test, getAll } = require("../controllers/BlogController");

router.get("/", getAll);

module.exports = router;
