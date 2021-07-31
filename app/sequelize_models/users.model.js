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
    registration_id : {
        type: Sequelize.TEXT
    } ,
    role : {
        type: Sequelize.TEXT
    } ,
    service: {
        type: Sequelize.TEXT
    } ,
    user_information: {
        type: Sequelize.TEXT
    } ,
    username: {
        type: Sequelize.TEXT
    },
    user_id: {
        type: Sequelize.INTEGER
    },
    facebook: {
        type: Sequelize.TEXT
    },
    twitter: {
        type: Sequelize.TEXT
    },
    linkedIn: {
        type: Sequelize.TEXT
    },
    youtube: {
        type: Sequelize.TEXT
    },
    aparat: {
        type: Sequelize.TEXT
    },
    instagram: {
        type: Sequelize.TEXT
    },
    telegram: {
        type: Sequelize.TEXT
    },
    address: {
        type: Sequelize.JSON
    }
  }
)

module.exports = users