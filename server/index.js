const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');
const controller = require('./controller.js');
const port = 3002;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(path.join(__dirname, '../dist')));

app.get('/reviews', controller.getProductReviews);


app.listen(port, console.log(`listening on port ${port}`));