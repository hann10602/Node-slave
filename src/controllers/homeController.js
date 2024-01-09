const getHomePage = (req, res) => {
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
