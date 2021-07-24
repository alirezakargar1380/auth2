const express = require("express");
const Router = express.Router();
const register = require("../controller/register.controller");
const session = require("./../controller/session.controller");

Router
    .route('/register')
    .post(
        session.check_for_block_sessions,
        register.add
    )

module.exports = Router;
