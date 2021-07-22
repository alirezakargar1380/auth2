const _ = require("lodash");
const userModel = require("../model/users.model")
const model = require("../model/users.model")

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

exports.get_user_data = async (user_info) =>
{
  userModel.condition = { id : user_info.id }
  return await userModel.get_all()
}