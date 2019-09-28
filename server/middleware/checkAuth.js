import jwt from 'jsonwebtoken';
import response from '../helpers/response';

module.exports = function auth(req, res, next) {
  const token = req.header('myToken');
  if (!token) {
   
    return response.responses(res, 401, null, true, 'No Token provided' ); 

  }
  try {
   const decoded = jwt.verify(token, process.env.JWT);
   req.user = decoded;
    next();
  } catch (ex) {
    return response.responses(res, 401, null, true, 'invalid token.' );
  
  }
};
