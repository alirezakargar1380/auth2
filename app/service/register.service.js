const model = require("../model/users.model")
const  { v4: uuidv4 }  = require('uuid');
const Exception = require('../utils/error.utility');
const _ = require("lodash");

exports.add = async (fields, service) =>
{
  fields.id = uuidv4()
  fields.service = service
  return await model.save(fields)
}

exports.check_for_available = async (fields) =>
{
  model.condition = { username : fields.username }
  return console.log(await model.count_all())

  if (await model.count_all() !== 0) return false

  model.condition = { email : fields.email }
  if (await model.count_all() !== 0) return false

  model.condition = { phone_number : fields.phone_number }
  if (await model.count_all() !== 0) return false

  return true
}

exports.check_for_username_available = async (fields) =>
{
  var data = ""
  model.condition = { username : fields.username }
  if (await model.count_all() !== 0)
  {
    return data = await model.get_all()
  }

  model.condition = { email : fields.email }
  if (await model.count_all() !== 0)
  {
    return data = await model.get_all()
  }

  model.condition = { phone_number : fields.phone_number }
  if (await model.count_all() !== 0)
  {
    return data = await model.get_all()
  }

  return false
}

// exports.check_for_available_user_in_service = async (users, headers) =>
// {
//   for (i = 0; i < users.length; i++)
//   {
//     if (
//         _.includes(JSON.parse(users[i].service), headers[0])
//     ) return {
//       status: false,
//       number: i
//     }
//     console.log(users[i].service)
//   }

//   return {
//     status: true
//   }
// }

exports.cheking_for_unick_items = async (fields, result, data) =>
{
  var db_record = data[result.number]
  if (fields.email)
  {
    if (
        db_record.username === fields.username
        || db_record.phone_number === fields.phone_number
        || db_record.email === fields.email
    ) throw Exception.setError("you was register before")
  } else {
    if (
        db_record.username === fields.username
        || db_record.phone_number === fields.phone_number
        // || db_record.email === fields.email
    ) throw Exception.setError("you was register before")
  }

  // return console.log(result)
  // return console.log(fields)
}