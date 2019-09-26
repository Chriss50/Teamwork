import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;  // Setting the port
module.exports = port;
