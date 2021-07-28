const response = require("../utils/response.utitlity");
const registerService = require("./../service/register.service");
const loginService = require("./../service/login.service");
const logoutService = require("./../service/logout.service");
const userService = require("../service/user.service");
const sessionService = require("./../service/session.service");
const login_validate = require("../validations/login.validate");
const logout_validate = require("../validations/logout.validate");
const Exception = require('./../utils/error.utility');
const redisClient = require("../utils/redis.utility");
const disposableCodeService = require("../service/disposable_code.service");
const recoveryValidate = require("../validations/recovery.validate");

exports.login = async (req, res) =>
{
  try {
    login_validate.login(req.fields)
    var headers = JSON.parse(req.headers.service)
    // if ( headers.length >= 2 )
    //   return response.exception(res, "service array cant be more than 1");
    req.fields.email = req.fields.username
    req.fields.phone_number = req.fields.username
    const data = await registerService.check_for_username_available(req.fields);
    if (!data) return response.error(res, "your username or password is wrong!")
    if (data[0].password === req.fields.password)
    {
      redisClient.get(data[0].id, async (err, user_id) =>
      {
        if (err) console.error(err)
        if (user_id !== null) {
          return  response.success(res, JSON.parse(user_id))
        } else {
          var token = await loginService.login(data[0], req.fields)
          await userService.update_service(req.fields, headers)
          // PROBLEM
          // token.id = data[0].id
          redisClient.setex(data[0].id, process.env.redisEndTime, JSON.stringify(token))
          await sessionService.set_session(req ,data[0])
          response.success(res, token)

        }
      })
    } else { throw Exception.setError("your username or password is wrong!") }

  } catch (e) {
    return response.exception(res, e.message);
  }
}

exports.logout = async (req, res) =>
{
  try {
    logout_validate.logout(req.fields)
    response.success(res,
        await logoutService.logout(req.fields.auth_token)
    )
  } catch (e) {
    return response.exception(res, e.message);
  }
}

const RequestIp = require('@supercharge/request-ip')
exports.ip = async (req, res) =>
{
  const ip = await RequestIp.getClientIp(req)
  res.send(ip)
}

exports.admin_login = async (req, res) =>
{
  try {
    response.success(res, "d")
  } catch (e) {
    return response.exception(res, e.message);
  }

}

exports.admin_login_sms = async (req, res) =>
{
  try {
    recoveryValidate.admin_login(req.fields)
    var check_result = await disposableCodeService.code_checking(req.fields.code)
    if (!check_result.status)
      return response.success(res,"your code was wrong")

    const token = await loginService.get_user_by_id(check_result.id)

    response.success(res,
        token
    )

  } catch (e) {
    return response.exception(res, e.message);
  }
}