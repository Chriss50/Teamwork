import article_store from '../models/articlesStore';
import _ from 'underscore';
import response from '../helpers/response';

const feeds = async (req, res) => {
  const {is_admin: admin} = req.user;
  if( admin ) {
    return response.responses(res, 401, null, true, 'Only employees are authorised');
  }
    const sortArticles = _.sortBy(article_store).reverse();
    return res.status(200).json({
      status: 200,
      message: 'success',
      data: sortArticles,
    });
  };
export default feeds;