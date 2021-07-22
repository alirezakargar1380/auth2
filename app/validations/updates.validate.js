const Schema = require('validate');
const _ = require('lodash');
const log = require('../utils/log.utility');
// const toString = require('../utils/to-string.utility');
const Exception = require('../utils/error.utility');


class Validate {
  constructor() {
    this.fields = {
      auth_token: {
        type: String,
      },
      service: {
        type: String,
      },
      password: {
        type: String,
        length: { min: 8, max: 48 }
      },
      phone_number: {
        type: String,
      },
      email: {
        type: String,
      },
      user_information: {
        type: String,
      },
      role: {
        type: String,
      },
      company_information: {
        type: String,
      },
      answers: {
        type: String,
      },
    };
    this.errorMessages = {
      required: () => 'ERROR_MESSAGE_REQUIRED',
      validation: () => 'ERROR_MESSAGE_INVALID',
      type: () => 'ERROR_MESSAGE_WRONG_TYPE',
      length: () => 'ERROR_MESSAGE_INVALID_LENGTH_8-48',
    };
    this.headerErrorMessages = {
      required: () => 'ERROR_MESSAGE_HEADER_REQUIRED',
      validation: () => 'ERROR_MESSAGE_INVALID',
      type: () => 'ERROR_MESSAGE_WRONG_TYPE',
      length: () => 'ERROR_MESSAGE_INVALID_LENGTH',
    };
  }

  password(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      password: _.assign({},
          this.fields.password, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  header(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      service: _.assign({},
          this.fields.service, {
            required: true
          },
      ),
    });


    schema.message(this.headerErrorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  security_question(items, throwErrors = true) {
    const schema = new Schema({
      answers: _.assign({},
          this.fields.answers, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  phone_number(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      phone_number: _.assign({},
          this.fields.phone_number, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  email(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      email: _.assign({},
          this.fields.email, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  user_information(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      user_information: _.assign({},
          this.fields.user_information, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  role(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      role: _.assign({},
          this.fields.role, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  company_information(items, throwErrors = true) {
    const schema = new Schema({
      auth_token: _.assign({},
          this.fields.auth_token, {
            required: true
          },
      ),
      company_information: _.assign({},
          this.fields.company_information, {
            required: true
          },
      ),
    });


    schema.message(this.errorMessages);

    return this.constructor.sanitizeErrors(
        schema.validate(_.assign({}, items)),
        throwErrors,
    );
  }

  static sanitizeErrors(errors, throwErrors) {

    const errs = _.map(
        errors,
        error => ({
          [error.path]: error.message
        }),
    );
    if (_.size(errs)) {
      log.error(`Validation failed, ${toString(errs)}`);

      if (throwErrors) {
        throw Exception.setError(JSON.stringify(errs), throwErrors);
      }
    }
    return errs;
  }
}

module.exports = new Validate();
