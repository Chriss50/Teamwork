import article_store from '../models/articlesStore';
import _ from 'underscore';

const feeds = async (req, res) => {
      const sortArticles = _.sortBy(article_store).reverse();
      return res.status(200).json({
        status: 200,
        message: 'success',
        data: sortArticles,
      });
  };
export default feeds;