const express = require("express");
const Router = express.Router();
const recovery = require("../controller/recovery.controller");
const redis = require("./../service/redis.service");
const session = require("./../controller/session.controller");

Router
    .route('/recovery-by/send-email')
    .post(
        session.check_for_block_sessions,
        recovery.by_email
    )

Router
    .route('/recovery-by/send-sms')
    .post(
        session.check_for_block_sessions,
        redis.sms_phone_number_blocking,
        recovery.by_sms
    )

Router
    .route('/recovery-by/last-password')
    .post(
        session.check_for_block_sessions,
        recovery.last_pass
    )

Router
    .route('/recovery-by/recover')
    .post(
        session.check_for_block_sessions,
        recovery.recovery
    )

Router
    .route('/recovery-by/answers')
    .post(
        session.check_for_block_sessions,
        recovery.recovery_by_answers
    )

module.exports = Router;
