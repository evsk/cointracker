const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/cointracker', {useNewUrlParser: true});

const db = mongoose.connection;

db.on('error', (error) => {
  console.log(error);
});

db.once('open', () => {
  console.log('Successfully connected to db');
});