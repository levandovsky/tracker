const Joi = require('joi');

module.exports = {
  register(req, res, next) {
    const schema = {
      email: Joi.string().email().required(),
      password: Joi.string().regex(new RegExp('^[a-zA-Z0-9]{8,32}$')).required(),
    };

    const { error } = Joi.validate(req.body, schema);

    if (error) {
      switch (error.details[0].context.key) {
        case 'email':
          res.status(400).send({
            error: 'Invalid email address! Please, check the guideline and try again.',
          });
          break;
        case 'password':
          res.status(400).send({
            error: 'Invalid password! Please, check the guideline and try again.',
          });
          break;
        default:
          res.status(400).send({
            error: 'Invalid registration credentials provided! Please, check the guideline and try again.',
          });
      }
    } else {
      next();
    }
  },
};
