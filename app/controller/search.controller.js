const response = require("../utils/response.utitlity")
// const validate = require("../validations/search.validate")
const searchService = require("./../service/search.service")

exports.search = async (req, res) => {
    try {
        // validate.header(req.headers)
        // validate.search(req.fields)
    

        let headers = JSON.parse(req.headers.service)   
        if ( headers.length >= 2 ) {
            return response.exception(res, "Services array must have at length of 1 at most")
        }
    
        response.success(res ,
            await searchService.search(req.fields , req.headers.service)
        )
    } catch (err) {
        return response.exception(res, err.message);
    }
}