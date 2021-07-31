const JWT = require("./../utils/JWT.utility")
const usersModel = require("./../model/users.model");
const  { v4: uuidv4 }  = require('uuid');

exports.update_password = async (decoded_token, fields) =>
{
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({ password : fields.password })
}

exports.update_address = async (decoded_token, fields) =>
{
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({ address: fields })
}

exports.update_phone = async (decoded_token, fields) =>
{
  usersModel.condition = { phone_number : fields.phone_number }
  if (await usersModel.count_all() !== 0)
  {
    return "this phone number is already exist"
  }
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({ phone_number : fields.phone_number })
}

exports.update_email = async (decoded_token, fields) =>
{
  usersModel.condition = { email : fields.email }
  if (await usersModel.count_all() !== 0)
  {
    return "this email is already exist"
  }
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({ email : fields.email })
}

exports.user_information = async (decoded_token, fields) =>
{
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({
    user_information : fields.user_information , national_code : fields.national_code , real_or_legal : fields.real_or_legal
  })
}

exports.role = async (decoded_token, fields) =>
{
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({ role : fields.role })
}

exports.company_information = async (decoded_token, fields) =>
{
  usersModel.condition = { id : decoded_token.id }
  return await usersModel.update_items({
    company_information : fields.company_information ,
    registration_id : fields.registration_id ,
    national_id : fields.national_id ,
    economic_code : fields.economic_code ,
    company_name : fields.company_name
  })
}

exports.update_social_media = async (user_info , fields) =>
{
  usersModel.condition = { id : user_info.id }
  return await usersModel.update_items({
    social_media : fields.social_media 
  })
}

exports.delete_user = async (decoded_token, service) =>
{
  usersModel.condition = { id : decoded_token.id }
  const user_data = await usersModel.get_all()
  return await usersModel.destroy()
  // if (user_data[0].service === JSON.parse(service)[0])
  // if (user_data[0].service !== JSON.parse(service)[0]) return "cant delete this user in this platform"
}