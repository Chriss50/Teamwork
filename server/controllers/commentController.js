import moment from 'moment';
import article_store from '../models/articlesStore';
import response from '../helpers/response';
import {validate} from "../middleware/articleValidator";
import user_data from '../models/userData';
import all_comments from '../models/commentStore';
import validate_comment from '../middleware/commentValidator';

const create_comment = async (req, res) => {
    const { error } = validate_comment(req.body);
    if (error)
        return response.responses(res, 404, null, true, error.details[0].message);

      const { id: userId } = req.user;
      const { id } = req.params;
      const { comment } = req.body;
      const current_article = await article_store.findIndex((findArticle) => findArticle.articleId === parseInt(id, 10));
      if (current_article !== -1) {
        const { createdOn, title, article } = article_store[current_article];
        const postComment = {
          commentId: all_comments.length + 1,
          articleId: parseInt(id, 10),
          authorId: userId,
          commenteeId: id,
          comment,
        };
  
        all_comments.push(postComment);
        if (postComment) {
          const result = {
            createdOn, title, article, comment,
          };
          res.status(201).json({
            status: 201,
            message: 'Article commented successfully',
            data: result,
          });
        }
      } else {
        res.status(404).json({
          status: 404,
          message: 'Article Not Found ',
        });
      }
  };
  export default create_comment;