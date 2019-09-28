import express from 'express';
import auth from '../middleware/checkAuth';
import articleCreation from '../controllers/createArticleController';

const router = express.Router();
router.post('/articles', auth, articleCreation);

export default router;
