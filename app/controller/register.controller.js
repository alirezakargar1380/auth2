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

    var headers = JSON.parse(req.headers.service)
    if ( headers.length >= 2 )
      return response.exception(res, "service array length can't be more than 1");
    if (req.fields.role === "admin")
      return response.exception(res, "You can't be admin");

    if (!await registerService.check_for_available(req.fields))
      return response.success(res,"You have registered before")

    response.success(res,
        await registerService.add(req.fields, req.headers.service)
    )

  } catch (e) {
    return response.exception(res, e.message);
  }
}