 const Async = require('async'); 
const BuyRequest = require('../models/buyrequest.model');
const SellRequest = require('../models/sellrequest.model');


exports.getBuyRequest = function (req, res, next) {

  var limit = req.params.limit || 10;
  var page = req.params.page ||  1;
  var skip = req.params.limit * page;
  BuyRequest.find()
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => console.error(err));
}
exports.getSellRequest = function (req, res, next) {
  console.log('req',req);
  var limit = req.params.limit;
  var page = req.params.page;
  var skip = req.params.limit * page;
  SellRequest.find()
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      res.json(results)
    })
    .catch((err) => console.error(err));
}
