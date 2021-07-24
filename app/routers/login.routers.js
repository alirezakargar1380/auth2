const express = require("express");
const Router = express.Router();
const login = require("../controller/login.controller");
const session = require("./../controller/session.controller");

Router
    .route('/login')
    .post(
        session.check_for_block_sessions,
        login.login
    )

Router
    .route('/logout')
    .post(login.ip,login.logout)

module.exports = Router;
