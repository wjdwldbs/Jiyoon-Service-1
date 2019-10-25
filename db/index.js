const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/reis', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('CONNECTED TO DATABASE!')
});
//fit: 1 to 5
//stars: 1 to 5

const reiSchema = mongoose.Schema({
  id: Number,
  username: String,
  product_id: Number,
  date: String,
  title: String,
  stars: Number,
  review: String,
  img: String,
  caption: String,
  recommend: Boolean,
  readReviews: Boolean,
  feedBack: String,
  email: String,
  location: String,
  purchaseLocation: Number,
  fit: Number,
  helpful_yes: Number,
  helpful_no: Number,
  appropriate: Boolean
});

let REI = mongoose.model('REI', reiSchema);


module.exports = REI;