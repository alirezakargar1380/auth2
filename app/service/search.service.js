const model = require('../model/users.model')
const { Op } = require('sequelize')
const Exception = require('./../utils/error.utility');
const _ = require("lodash");

exports.search = async (fields) => {
    // fields.service = service
    const keys = Object.keys(fields)
    const values = Object.values(fields)

    let obj = {}

    for(let i=0 ; i<keys.length ; i++) {
        obj[keys[i]] = { [Op.like]: '%' + values[i] + '%' }
    }

    model.condition = obj
    return await model.get_all()
}

exports.search_for_service_admins = async (fields, service) => {
    // fields.service = service
    const keys = Object.keys(fields)
    const values = Object.values(fields)

    let obj = {}

    for(let i=0 ; i<keys.length ; i++) {
        obj[keys[i]] = { [Op.like]: '%' + values[i] + '%' }
    }
    obj["role"] = "admin"
    model.condition = obj
    var admins = await model.get_all()
    for (i = 0; i < admins.length; i++)
    {
        if (_.includes(JSON.parse(admins[i].service), service[0]))
            throw Exception.setError("admin for this service is available");
    }
}

exports.check_for_available_admin_service = async (fields, service) => {
    // fields.service = service
    const keys = Object.keys(fields)
    const values = Object.values(fields)

    let obj = {}

    for(let i=0 ; i<keys.length ; i++) {
        obj[keys[i]] = { [Op.like]: '%' + values[i] + '%' }
    }
    obj["role"] = "admin"
    model.condition = obj
    var admins = await model.get_all()
    // return admins
    for (i = 0; i < admins.length; i++)
    {
        if (_.includes(JSON.parse(admins[i].service), service[0]))
            return true
    }
    return false
}