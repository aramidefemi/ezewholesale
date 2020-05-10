const Async = require('async');
const BuyRequest = require('../models/buyrequest.model');
const SellRequest = require('../models/sellrequest.model');
const codeBits = require('../lib/code.bits');

exports.getBuyRequest = function (req, res, next) {

  var limit = parseInt(req.query.limit) || 12;
  var page = req.query.page || 0;
  var skip = limit * page;
  BuyRequest
    .find()
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      BuyRequest.countDocuments({}, function (err, count) {
        res.json({
          count,
          results
        });
      });
    })
    .catch((err) => console.error(err));
}
exports.getSellRequest = function (req, res, next) {
  var limit = parseInt(req.query.limit) || 12;
  var page = req.query.page || 1;
  var skip = limit * page;

  SellRequest.find()
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      SellRequest.countDocuments({}, function (err, count) {
        res.json({
          count,
          results
        });
      });
    })
    .catch((err) => console.error(err));
}
exports.searchSellRequest = function (req, res, next) {
  var limit = parseInt(req.query.limit) || 12;
  var page = req.query.page || 1;
  var skip = limit * page;
  var term = req.body;

  var search = codeBits.arrangeSearchTerm(term);

  SellRequest
    .find(search)
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      SellRequest.countDocuments(search, function (err, count) {
        res.json({
          count,
          results
        });
      });
    })
    .catch((err) => console.error(err));
}
exports.searchBuyRequest = function (req, res, next) {
  var limit = parseInt(req.query.limit) || 12;
  var page = req.query.page || 1;
  var skip = limit * page;
  var term = req.body;
  var search = codeBits.arrangeSearchTerm(term);


  BuyRequest
    .find(search)
    .limit(limit)
    .skip(skip)
    .exec()
    .then((results) => {
      BuyRequest.countDocuments(search, function (err, count) {
        res.json({
          count,
          results
        });
      });
    })
    .catch((err) => console.error(err));
}
