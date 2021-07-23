const express = require("express");
const Router = express.Router();
const search = require("../controller/search.controller");

Router
    .route('/search_users')
    .post(search.search)

module.exports = Router;
