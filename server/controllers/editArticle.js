import moment from 'moment';
import article_store from '../models/articlesStore';
import response from '../helpers/response';
import {validate} from "../middleware/articleValidator";
import user_data from '../models/userData';

const modify_article = async (req, res) => {
    const { error } = validate(req.body);
    if (error) {
      return response.responses(res, 422, null, true, error.details[0].message);
    }
    const {is_admin: admin} = req.user;
    if(admin) {
      return response.responses(res,401, null, true, 'Only employees are allowed');
    }
      const { id } = req.params;
      const { title, article } = req.body;
      const { id: author } = req.user;
      const current_article = article_store.find((editArticle) => editArticle.articleId == id);
      if (!current_article) {
        response.responses( res, 404, null, true, 'Article Not Found');
      } 
      else {
        //   Checking if the article matches the right author
        const auth_confirm = article_store.find((editArticle) => 
        editArticle.articleId == id && editArticle.authorId == author);
        if (!auth_confirm) {
            response.responses( res, 401, null, true, 'Unauthorised access, only author can edit');
        } 
        else {
          const newArticle = Object.keys(req.body);
          newArticle.forEach((data) => {
            auth_confirm[data] = req.body[data];
          });
          const result = { editedOn: moment().format(), title, article };
          return response.responses(res, 200, result, false, 'article successfully edited');
        }
      }
  };
  export default modify_article;