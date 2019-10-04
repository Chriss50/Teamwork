import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import response from '../helpers/response';
import user_data from '../models/userData';
import {validate} from "../middleware/loginValidator";

require('dotenv').config(); // to require environment variable form a .env file into process.env

const login = async (req, res) => {
    // Checking if the user entered the correct data depending on validation
const { error } = validate(req.body); 
if (error)
    return response.responses(res,401,null, true, error.details[0].message );

    // Comparing the entered email with the one in the storage
    // Checking if the passwords are the same
    const userCredentials = user_data.find(user => user.email === req.body.email);
    
    if (!userCredentials)
    return response.responses(res,404,null, true, 'Invalid Credentials' );
    const compare_password = await bcrypt.compare(req.body.password, userCredentials.password);
    if (!compare_password)
        return response.responses(res,404,null, true, 'Invalid Credentials' );

    // Generating the token
    const token=jwt.sign({
        id:userCredentials.id, is_admin: userCredentials.is_admin
    },process.env.JWT,{
        expiresIn:'24h'
    });
    // omit password 
    // eslint-disable-next-line no-unused-vars
    const {
        password : _,address, gender, department, jobRole, is_admin, ...omitpUser
    } = userCredentials;

    // Returning the data after success
    return response.responses(res, 200,
        { token, ...omitpUser}, 
        false, 'User is successfully logged in');
  };
  
  export default login;
  