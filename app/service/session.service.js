const login_model = require("./../model/login.model");
const session_model = require("./../model/session.model")
const  { v4: uuidv4 }  = require('uuid');
const Exception = require('../utils/error.utility');

exports.set_session = async (req) =>
{
  if (!req.session.user_id)
  {
    login_model.condition = { username : req.fields.username} 
    const user_information = await login_model.select()
    if (req.session.user_id !== user_information[0].id.toString())
      console.log("session set "+req.session.id)

    session_model.condition = { user_id : ser_information[0].id }
    if (await session_model.counts() < 3) {
      // save
      session_model.condition = ``
      var json = {
        id: uuidv4(),
        user_id: user_information[0].id,
        session_id: req.session.id,
        block_status: false
      }
      await session_model.save(json)
    } else {
      // update
      // session_model.condition = { session_id : eq.session.id }
      throw Exception.setError("you cant have more than 3 active session")

    }

    return req.session.user_id = user_information[0].id.toString()
  }

}

exports.get_sessions = async (user_info) =>
{
  session_model.condition = { user_id : ser_info.id }
  return await session_model.select()
}