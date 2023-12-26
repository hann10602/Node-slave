const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 8081;
const hostname = process.env.HOSTNAME || "localhost";

app.set("views", path.join(__dirname, "./views/"));
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.render("sample.ejs");
});

app.get("/abc", (req, res) => {
  res.send("cai thang kia");
});

app.listen(port, () => {
  console.log(`Program run on port ${port}`);
});
