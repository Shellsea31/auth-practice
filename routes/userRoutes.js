const router = require("express").Router();
const { test, register } = require("../controllers/UserControllers");

router.get("/", test);
router.post("/register", register);

module.exports = router;
