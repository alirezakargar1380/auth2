const response = require("../utils/response.utitlity");
const validate = require("./../validations/user_data.validate");
const tokenService = require("../service/token.service");
const userService = require("../service/user.service");

exports.get_role = async (req, res) =>
{
  try {
    validate.header(req.headers)
    await tokenService.token_validate(req.headers.auth_token)
    var decode_token = await tokenService.decode_token(req.headers.auth_token);
    return response.success(res,
        {
          role: decode_token.role
        }
    )
  } catch (e) {
    return response.exception(res, e.message);
  }

}

exports.get_user_detail = async (req, res) =>
{

  try {
    validate.header(req.headers)
    await tokenService.token_validate(req.headers.auth_token)
    var decode_token = await tokenService.decode_token(req.headers.auth_token);
    const user_data = await userService.get_user_data(decode_token)

    response.success(res, user_data)
  } catch (e) {
    return response.exception(res, e.message);
  }

}