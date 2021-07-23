const express = require("express");
const Router = express.Router();
const recovery = require("../controller/recovery.controller");
const redis = require("./../service/redis.service");

Router
    .route('/recovery-by/send-email')
    .post(recovery.by_email)

Router
    .route('/recovery-by/send-sms')
    .post(redis.sms_phone_number_blocking, recovery.by_sms)

Router
    .route('/recovery-by/last-password')
    .post(recovery.last_pass)

Router
    .route('/recovery-by/recover')
    .post(recovery.recovery)

Router
    .route('/recovery-by/answers')
    .post(recovery.recovery_by_answers)

module.exports = Router;
