const model = require('../model/users.model')
const { Op } = require('sequelize')

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