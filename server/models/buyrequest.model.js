const mongoose = require('mongoose');

const BuyRequestSchema = new mongoose.Schema({
  name: {
    type: String,
    default: ''
  },
  price: {
    type: Number,
    default: ''
  },
  condition: {
    type: String,
    default: ''
  },
  storageCapacity: {
    type: String,
    default: ''
  },
});

module.exports = mongoose.model('BuyRequest', BuyRequestSchema);
