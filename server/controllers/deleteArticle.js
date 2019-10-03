import article_store from '../models/articlesStore';
import response from '../helpers/response';

const delete_article = async (req, res) => {
      const { id } = req.params;
      const { id: author } = req.user;
      const {is_admin: admin} = req.user;
      if( admin ) {
        return response.responses(res, 401, null, false, 'Only the author is allowed to delete the article');
      }
      const current_article = article_store.find((delArticle) => delArticle.articleId === parseInt(id, 10));
      if (!current_article) 
      return response.responses(res, 404, null, true, 'Article Not Found');
      else {
        const article = article_store.findIndex((deleteArticle) => deleteArticle.articleId === parseInt(id, 10) && deleteArticle.authorId === author);
        if (article !== -1) {
          article_store.splice(article, 1);
          return response.responses(res, 204, 204, false, 'article successfully deleted');
        }
      }
  };
  export default delete_article;