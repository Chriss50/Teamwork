import article_store from '../models/articlesStore';
import response from '../helpers/response';
import all_comments from '../models/commentStore';

const viewSpecificArticle = async (req, res) => {
      const { id } = req.params;
      const {is_admin: admin} = req.user;
      const current_article = article_store.filter(
        (specificArticle) => specificArticle.articleId === parseInt(id, 10),
      );
      
      if(admin) {
        return response.responses(res, 401, null, true, 'You are not allowed to view article, only user allowed');
      }

      if (current_article.length > 0) {
        const fetchcomments = await all_comments.filter(
          (article) => article.articleId === parseInt(id, 10),
        );
        const {
          articleId, createdOn, title, article, authorId,
        } = current_article[0];
        const data = {
          articleId,
          createdOn,
          title,
          article,
          authorId,
          comments: fetchcomments,
        };
        res.status(200).json({
          status: 200,
          message: 'success',
          data
        });
      }
      else {
        res.status(404).json({
          status: 404,
          message: 'Article Not Found',
        });
      }
  };

  export default viewSpecificArticle;