const tokenService = require("../service/token.service");
const validate = require("../validations/session.validate");
const response = require("../utils/response.utitlity");
const sessionService = require("../service/session.service");

exports.get_sessions = async (req, res) => {
  try {
    validate.header(req.headers)
    await tokenService.token_validate(req.headers.auth_token)
    var decode_token = await tokenService.decode_token(req.headers.auth_token)
    // return response.success(res, decode_token)
    // if (req.session.user_id === decode_token.id)
      return response.success(res,
          await sessionService.get_sessions(decode_token)
      )

    return response.success(res, "nothing")
  } catch (e) {
    return response.exception(res, e.message);
  }

}