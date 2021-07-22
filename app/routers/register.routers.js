const express = require("express");
const Router = express.Router();
const register = require("../controller/register.controller");

Router
    .route('/register')
    .post(register.add)

module.exports = Router;
