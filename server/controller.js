const REI = require('../db/index.js');

const controller = {
  getProductReviews: ({params}, res) => {
    REI.find({product_id: `${params.id}`})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(400).send(`Unsuccessful getProductReviews ${err}`))
  },

  getReviewImgInfo: ({params}, res) => {
    var query = REI.find({id: `${params.id}`})
    query.select('img caption')
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(`Unsuccessful getReviewImgInfo ${err}`))
  },

  addHelpfulCount: ({params}, res) => {
    var query = {id: `${params.id}`}
    REI.findOneAndUpdate(query, { $inc: {helpful_yes: 1} }, {new: true})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(`Unsuccessful increment helpful review ${err}`))
  },

  addUnhelpfulCount: ({params}, res) => {
    var query = {id: `${params.id}`}
    REI.findOneAndUpdate(query, { $inc: {helpful_no: 1} }, {new: true})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.status(404).send(`Unsuccessful increment helpful review ${err}`))
  }

}

module.exports = controller;