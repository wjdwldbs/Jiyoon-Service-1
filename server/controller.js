const REI = require('../db/index.js');

const controller = {
  getProductReviews: ({params}, res) => {
    REI.find({product_id: `${params.id}`})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.stats(400).send(`Unsuccessful getProductReviews ${err}`))
  },

  getReviewImgInfo: ({params}, res) => {
    var query = REI.find({id: `${params.id}`})
    query.select('img caption')
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(`Unsuccessful getReviewImgInfo ${err}`))
  }
}

module.exports = controller;