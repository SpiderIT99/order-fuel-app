var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var fuelSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    required: true
  },
  src: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Fuel', fuelSchema);
