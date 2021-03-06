import express from 'express';
import router from './routes/createuser';
import routerArticles from './routes/articles';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use('/api/v1', router);
app.use('/api/v1', routerArticles);


const port = process.env.PORT || 3000;  // Setting the port


app.listen(port, () => console.log(`Running on PORT ${port}`));
export default app;