const response = require("../utils/response.utitlity");
const registerService = require("./../service/register.service");
const loginService = require("./../service/login.service");
const logoutService = require("./../service/logout.service");
const userService = require("../service/user.service");
const sessionService = require("./../service/session.service");
const login_validate = require("../validations/login.validate");
const logout_validate = require("../validations/logout.validate");

var ip = require("ip");

exports.login = async (req, res) =>
{
  try {
    login_validate.login(req.fields)
    var headers = JSON.parse(req.headers.service)
    if ( headers.length >= 2 )
      return response.exception(res, "service array cant be more than 1");

    req.fields.email = req.fields.username
    req.fields.phone_number = req.fields.username
    const data = await registerService.check_for_username_available(req.fields);
    if (!data) return response.error(res, "your username or password is wrong!")

    const token = await loginService.login(data[0], req.fields)
    await userService.update_service(req.fields, headers)
    await sessionService.set_session(req)
    response.success(res, token)

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