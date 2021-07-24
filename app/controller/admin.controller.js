const response = require("../utils/response.utitlity");
const tokenService = require("../service/token.service");
const _ = require("lodash");

exports.admin_token_checking = async (req, res, next) =>
{
  try {
    await tokenService.token_validate(req.headers.auth_token)
    var decode_token = await tokenService.decode_token(req.headers.auth_token)
    if (decode_token.role === "admin")
    {
      var service = JSON.parse(req.headers.service)
      var user_service = JSON.parse(decode_token.service)
      if (!_.includes(user_service, service[0]))
        return response.error(res, "you are not from this platphorm")

      return next()
    } else {
      return response.error(res, "you are not admin")
    }

  } catch (e) {
    return response.exception(res, e.message);
  }
}