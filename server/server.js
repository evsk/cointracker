const express = require('express');
const morgan = require('morgan');
const controllers = require('./controllers');

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static('client/dist'));

app.get('/search/:txHash', controllers.search);

module.exports = app;
