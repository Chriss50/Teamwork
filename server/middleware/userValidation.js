
import Joi from 'joi';

function validate (req) {
  const schema = {
    email: Joi.string().trim().email().required(), 
    firstName: Joi.string().trim().required().min(3).max(255),
    lastName: Joi.string().trim().required().min(2).max(255),
    password: Joi.string().trim().required().min(6).max(50),
    gender: Joi.string().trim().required().min(4).max(255),
    jobRole: Joi.string().trim().required().min(4).max(255),
    department: Joi.string().trim().required().min(2).max(255),
    address: Joi.string().trim().required().min(4).max(255),
    is_admin: Joi.boolean()
  };

  return Joi.validate(req, schema);
}

export default validate;