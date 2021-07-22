const express = require("express");
const Router = express.Router();
const session = require("../controller/session.controller");

Router
    .route('/sessions/get')
    .post(session.get_sessions)

module.exports = Router;
