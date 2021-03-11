const User = require("../models");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

module.exports = {
  test: (req, res) => {
    res.send("success from users");
  },
  register: async (req, res) => {
    try {
      const { email, password, passwordCheck, displayName } = req.body;

      // check that all fields are entered
      if (!email || !password || !passwordCheck || !displayName) {
        return res.status(400).json({ msg: "Please enter all fields." });
      }

      // check that password is long enough
      if (passwordCheck.length < 5) {
        return res
          .status(400)
          .json({ msg: "Password must be at least 5 characters." });
      }

      // check if password and passwordCheck are the same
      if (password !== passwordCheck) {
        return res
          .status(400)
          .json({ msg: "Password does not match the password check." });
      }

      // find user by email
      const existingUser = await User.findOne({ email: email });

      // check if user already has an email in the database
      if (existingUser) {
        return res.status(400).json({ msg: "User already exists." });
      }

      // generate garbage
      const salt = await bcrypt.genSalt();
      // mix password with the garbage
      const passwordHash = await bcrypt.hash(password, salt);

      const newUser = new User({
        email,
        password: passwordHash,
        displayName,
      });

      const savedUser = await newUser.save();
      res.json(savedUser);
    } catch (err) {
      console.log(err);
    }
  },
};
