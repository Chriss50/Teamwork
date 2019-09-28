import Joi from 'joi';

function validate(req) {
    const schema = {
      title: Joi.string().required().min(4).max(255),
      article: Joi.string().required().min(5).max(255)
    };
  
    return Joi.validate(req, schema);
  }
  
  export {validate};