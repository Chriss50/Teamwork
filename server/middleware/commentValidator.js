import Joi from 'joi';

function validate_comment(req) {
  const schema = {
    comment: Joi.string().required().min(2),
  };

  return Joi.validate(req, schema);
}
export default validate_comment;
