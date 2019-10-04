import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import user_data from '../models/userData';
import response from '../helpers/response';
import validate from "../middleware/userValidation";
import dotenv from 'dotenv';

dotenv.config();
const createUser = async (req, res) => {
                
const { error } = validate(req.body); 
if (error) return response.responses(res, 401, null, true, error.details[0].message );

  const {firstName, lastName, email, password, gender,
    jobRole, department, address, is_admin} = req.body;

//   checking if the account exists in the system
  let checkUser = user_data.find(user => user.email === req.body.email);
  if (checkUser) return response.responses(res, 403, null, true, 'Email already exist' );
  
//   Declaring a new user variables
  let newUser = {
    id: user_data.length + 1,
    firstName,
    lastName,
    email,
    password,
    gender,
    jobRole,
    department,
    address,
    is_admin
  };

//   Encrypting the password with bcrypt
 const salt = await bcrypt.genSalt(10); // await is an operator used to wait for promise to resolve or reject
 newUser.password = await bcrypt.hash(newUser.password, salt);
 user_data.push(newUser);   //Storing data to the data structure
 
 //generate token
 const token=jwt.sign({id:newUser.id, is_admin:newUser.is_admin},process.env.JWT,{expiresIn:"24h"});
 // omit password
 // eslint-disable-next-line no-unused-vars
 const { password : _, ...omitpUser } = newUser;
 
    return response.responses(res, 201, { token,...omitpUser }, false, 'User created successfully');


}
    

export default createUser;
