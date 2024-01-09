const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getPage1,
  getPage2,
  createUser,
} = require("../controllers/homeController");

router.get("/", getHomePage);

router.get("/page-1", getPage1);

router.get("/page-2", getPage2);

router.post("/create-user", createUser);

module.exports = router;
