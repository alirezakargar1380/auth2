const express = require("express");
const Router = express.Router();
const updates = require("../controller/updates.controller");

Router
    .route('/user/update/password')
    .post(updates.update_password)

Router
    .route('/user/update/phone-number')
    .post(updates.phone_update)

Router
    .route('/user/update/email')
    .post(updates.email_update)

Router
    .route('/user/update/user-information')
    .post(updates.user_information)

Router
    .route('/user/update/role')
    .post(updates.update_role)

Router
    .route('/user/update/company-information')
    .post(updates.company_information_update)

Router
    .route('/user/delete-account')
    .post(updates.delete_user)

Router
    .route('/user/update/security_question')
    .post(updates.update_security_question)

Router
    .route('/user/update/social_media')
    .post(updates.update_social_media)


module.exports = Router;
