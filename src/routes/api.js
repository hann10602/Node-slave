const express = require("express");
const api = express.Router();
const { createUser } = require("../controllers/api/user/UserAPIController");

api.post("/create", createUser);

module.exports = api;
