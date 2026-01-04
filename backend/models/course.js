const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const Course = sequelize.define("Course", {
  courseName: DataTypes.STRING,
  description: DataTypes.TEXT,
  instructor: DataTypes.STRING
});

module.exports = Course;
