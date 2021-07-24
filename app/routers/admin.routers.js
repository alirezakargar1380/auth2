const express = require("express");
const Router = express.Router();
const login = require("../controller/login.controller");
const admin = require("./../controller/admin.controller");
const user_data = require("./../controller/get_user_data.controller");

Router
    .route("/admin/block-user")
    .post(
        admin.admin_token_checking,
        user_data.get_user_detail_for_admin
    )

Router
    .route('/login/admin')
    .post(
        admin.admin_token_checking,
        login.admin_login_sms)

module.exports = Router;
