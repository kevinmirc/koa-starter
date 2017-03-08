const mongoose = require('mongoose');

// mongoose requires a promise library to be added
mongoose.Promise = Promise;

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

module.exports = require('./schemas');
