import express from 'express';
import auth from '../middleware/checkAuth';
import articleCreation from '../controllers/createArticleController';
import modify_article from '../controllers/editArticle';
import delete_article from '../controllers/deleteArticle';
import create_comment from '../controllers/commentController';
import feeds from '../controllers/viewArticles';
import viewSpecificArticle from '../controllers/viewSpecificOnes';

const router = express.Router();
router.post('/articles', auth, articleCreation);
router.patch('/articles/:id', auth, modify_article);
router.delete('/articles/:id', auth, delete_article);
router.post('/articles/:id/comments', auth, create_comment);
router.get('/feeds', auth, feeds);
router.get('/articles/:id', auth, viewSpecificArticle);

export default router;
