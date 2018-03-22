const mongoose = require('mongoose');

const hikeSchema = new mongoose.Schema({
  name: {type: String, required:true},
  description: String,
  location: String,
  difficulty: {type: Number, MinValue: 0},
  pets: Boolean,
  img: String
})

const Hike = mongoose.model('Hike', hikeSchema);

module.exports = Hike;
