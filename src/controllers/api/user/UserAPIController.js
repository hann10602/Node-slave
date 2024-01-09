const createUser = (req, res) => {
  console.log("body" + req.body);
  res.send("Successfully");
};

module.exports = { createUser };
