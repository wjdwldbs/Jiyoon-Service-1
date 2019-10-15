const REI = require('../db/index.js');

const controller = {
  getProductReviews: (req, res) => {
    REI.find({product_id: 1})
    .then((results) => res.status(200).send(results))
    .catch((err) => res.stats(400).send(`unsuccessful ${err}`))
  }
}

module.exports = controller;