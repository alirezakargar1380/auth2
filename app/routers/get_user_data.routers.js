const express = require("express");
const Router = express.Router();
const user_data = require("../controller/get_user_data.controller");

Router
    .route('/user/get-roles')
    .post(user_data.get_role)

Router
    .route('/user/get-users')
    .post(user_data.get_user_detail)


module.exports = Router;
