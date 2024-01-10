const express = require("express");
const api = express.Router();
const {
  createUser,
  getUserList,
} = require("../controllers/api/user/UserAPIController");

api.get("/create/:id", createUser);
api.get("/get-all", getUserList);

module.exports = api;
