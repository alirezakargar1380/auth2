const express = require("express");
const Router = express.Router();
const search = require("../controller/search.controller");
const session = require("./../controller/session.controller");
const admin = require("./../controller/admin.controller");

Router
    .route('/search_users')
    .post(
        session.check_for_block_sessions,
        admin.admin_token_checking,
        search.search
    )

module.exports = Router;
