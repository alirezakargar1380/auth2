const response = require("../utils/response.utitlity");
const validate = require("../validations/register.validate");
const registerService = require("./../service/register.service");
const log = require("../utils/log.utility");
const Exception = require('../utils/error.utility');

exports.add = async (req, res) =>
{
  try {
    validate.header(req.headers)
    validate.add(req.fields)
    // validate.real_legal(req.fields)
    // if (req.fields.real_or_legal === "real")
    // {
    //   validate.real()
    // }
    // if (req.fields.real_or_legal === "legal")
    // {
    //   validate.legal()
    // }

    var headers = JSON.parse(req.headers.service)
    if ( headers.length >= 2 )
      return response.exception(res, "service array length can't be more than 1");
    if (req.fields.role === "admin")
      return response.exception(res, "You can't be admin");

    // const data = await registerService.check_for_username_available(req.fields);
    //
    // const result = await registerService.check_for_available_user_in_service(data, headers)
    // if (!result.status)
    // {
    //   await userService.update_service(req.fields, headers)
    //   await registerService.cheking_for_unick_items(req.fields, result, data)
    // } else {
    //   return response.success(res, "you was register before")
    // }
    // if (!result.status)
    //   return response.error(res, "this username is available in this service")
    if (await registerService.check_for_available(req.fields))
      return response.success(res,"You have registered before")

    return response.success(res,"hey")

    response.success(res,
        await registerService.add(req.fields, req.headers.service)
    )

  } catch (e) {
    return response.exception(res, e.message);
  }
}