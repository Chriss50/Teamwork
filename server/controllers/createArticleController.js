import moment from 'moment';
import article_store from '../models/articlesStore';
import response from '../helpers/response';
import {validate} from "../middleware/articleValidator";
import user_data from '../models/userData';

const articleCreation = async (req, res) => {
    const { error } = validate(req.body);
    if (error)
      return response.responses(res, 404, null, true, error.details[0].message);

// Checking if the user is logged in
      const check = user_data.find((user) => user.id);
      if (!check)
        return response.responses(res, 401, null, true, 'You must sign in first to post any article');

      const { 
        id: authorId, firstName, lastName } = check;
      const {
        title, article } = req.body;

      const authorName = `${firstName} ${lastName}`;
      const newArticle = {
        articleId: article_store.length + 1,
        createdOn: moment().format(),
        title,
        article,
        authorId,
        authorName,
      };
      article_store.push(newArticle);
    return response.responses(res, 200, newArticle, false, 'article successfully created' );
  };

export default articleCreation;