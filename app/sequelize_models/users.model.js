const Sequelize = require('sequelize')

const db = require('../config/db')

const users = db.define('users' , {
    id : {
        type: Sequelize.UUID ,
        allowNull: false ,
        primaryKey: true
    } ,
    company_information : {
        type: Sequelize.TEXT
    } ,
    company_name : {
        type: Sequelize.TEXT
    } ,
    economic_code : {
        type: Sequelize.TEXT
    } ,
    email : {
        type: Sequelize.TEXT
    } ,
    national_code : {
        type: Sequelize.TEXT
    } ,
    national_id : {
        type: Sequelize.TEXT
    } ,
    password : {
        type: Sequelize.TEXT
    } ,
    phone_number : {
        type: Sequelize.TEXT
    } ,
    real_or_legal : {
        type: Sequelize.TEXT
    } ,
    registration_id : {
        type: Sequelize.TEXT
    } ,
    role : {
        type: Sequelize.TEXT
    } ,
    service: {
        type: Sequelize.TEXT
    } ,
    social_media: {
        type: Sequelize.TEXT
    } ,
    user_information: {
        type: Sequelize.TEXT
    } ,
    username: {
        type: Sequelize.TEXT
    }
  }
)

module.exports = users