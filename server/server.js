import express from 'express';
import port from './config/port';
import router from './routes/createuser';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1', router);



app.listen(port, () => console.log(`Running on PORT ${port}`));
module.exports = app;