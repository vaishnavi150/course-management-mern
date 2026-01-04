const express = require("express");
const Course = require("../models/course");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const course = await Course.create(req.body);
  res.json(course);
});

router.get("/", auth, async (req, res) => {
  const courses = await Course.findAll();
  res.json(courses);
});

router.put("/:id", auth, async (req, res) => {
  await Course.update(req.body, { where: { id: req.params.id } });
  res.json({ message: "Updated" });
});

router.delete("/:id", auth, async (req, res) => {
  await Course.destroy({ where: { id: req.params.id } });
  res.json({ message: "Deleted" });
});

module.exports = router;
