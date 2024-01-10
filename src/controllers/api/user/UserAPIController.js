const connection = require("../../../config/db");

const createUser = (req, res) => {
  const { fullname, username, password } = req.body;

  connection.query(
    `INSERT INTO user (fullname, username, password) VALUES(?, ?, ?)`,
    [fullname, username, password],
    (err, results) => {
      console.log(results);
    }
  );
  res.send("Successfully");
};

const getUserList = async (req, res) => {
  const [results, field] = await connection.query(`SELECT * FROM user`);
  console.log(results);
  res.send("SUccessfully");
};

module.exports = { createUser, getUserList };
