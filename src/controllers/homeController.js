const pool = require("../config/db");
const { getUserList } = require("./api/user/UserAPIController");

const getHomePage = (req, res) => {
  pool.query("SELECT * FROM user", (err, results) => {
    console.log(results);
  });
  res.render("sample.ejs");
};

const getPage1 = (req, res) => {
  res.send("Hello page 1");
};

const getPage2 = (req, res) => {
  res.send("Hello page 2");
};

const createUser = (req, res) => {
  res.send("Hello page 1");
};

module.exports = {
  getHomePage,
  getPage1,
  getPage2,
  createUser,
};
