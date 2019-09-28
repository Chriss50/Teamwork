import express from 'express';
import auth from '../middleware/checkAuth';
import articleCreation from '../controllers/createArticleController';
import modify_article from '../controllers/editArticle';

const router = express.Router();
router.post('/articles', auth, articleCreation);
router.patch('/articles/:id', auth, modify_article);

export default router;
