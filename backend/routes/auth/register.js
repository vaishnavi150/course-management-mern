const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../../models/user");

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ where: { email } });
  if (userExists) return res.status(400).json({ message: "Email already exists" });

  const hashedPassword = await bcrypt.hash(password, 10);

  await User.create({ name, email, password: hashedPassword });
  res.json({ message: "User Registered" });
});

module.exports = router;
