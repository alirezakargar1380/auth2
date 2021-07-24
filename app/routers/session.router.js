const express = require("express");
const Router = express.Router();
const session = require("../controller/session.controller");

Router
    .route('/sessions/get')
    .post(
        session.check_for_block_sessions,
        session.get_sessions
    )

module.exports = Router;
