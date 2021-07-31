const _ = require("lodash");
const userModel = require("../model/users.model")
const model = require("../model/users.model")
const sessionModel = require("../model/session.model");
const Exception = require('../utils/error.utility');

exports.update_service = async (fields , headers) =>
{
  model.condition = { username : fields.username , password : fields.password }
  const user_info = await model.get_all();

  const user_services = JSON.parse(user_info[0].service)
  if ( !_.includes(user_services, headers[0]) )
  {
    user_services.push(headers[0])
    userModel.condition = { id : user_info[0].id }

    await userModel.update_items({ service : JSON.stringify(user_services) })
  }
}

exports.update_role = async (fields, role) =>
{
  model.condition = { username : fields.username , password : fields.password }
  const user_info = await model.get_all();

  var user_role = JSON.parse(user_info[0].role);

  // console.log([role].length)
  // if ([role].length >= 2)
  //   throw Exception.setError("your role length cant be more than 2")

  var role_keys = Object.keys(role);
  var role_values = Object.values(role);

  if (!_.includes(user_info[0].role, role_keys[0]))
    userModel.condition = { id : user_info[0].id }
    user_role[role_keys[0]] = role_values[0];
    // console.log(user_role)
    await userModel.update_items({ role : JSON.stringify(user_role) })

}

exports.get_user_data = async (user_info) =>
{
  userModel.condition = { id : user_info.id }
  return await userModel.get_all()
}

exports.update_user_sessions = async(fields) =>
{
  sessionModel.condition = { user_id : fields.user_id }
  if (await sessionModel.counts() === 0)
    throw Exception.setError("this user is not exist")

  return await sessionModel.update_items({
    block_status : fields.block
  })
}