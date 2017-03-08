const mongoose = require('mongoose');

const leagueSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  }
});

const League = mongoose.model('League', leagueSchema);

module.exports = League;
