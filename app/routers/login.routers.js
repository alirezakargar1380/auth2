const express = require("express");
const Router = express.Router();
const login = require("../controller/login.controller");

Router
    .route('/login')
    .post(login.login)

Router
    .route('/logout')
    .post(login.ip,login.logout)

module.exports = Router;
