const express = require("express");
const Router = express.Router();
const user_data = require("../controller/get_user_data.controller");
const session = require("./../controller/session.controller");
const authentication = require("./../controller/basic_authentication.controller");

Router
    .route('/user/get-roles')
    .post(
        authentication.API_authenticaiton,
        session.check_for_block_sessions,
        user_data.get_role
    )

Router
    .route('/user/get-users')
    .post(
        authentication.API_authenticaiton,
        session.check_for_block_sessions,
        user_data.get_user_detail
    )


module.exports = Router;
