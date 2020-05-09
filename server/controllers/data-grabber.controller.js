// const Counter = require('../../models/Counter');
const Sheets = require('../lib/google-sheets');
const Async = require('async');
const Stock = require('../lib/google-sheet-cell');
const BuyRequest = require('../models/buyrequest.model');
const SellRequest = require('../models/sellrequest.model');


exports.getBuyRequest = function (req, res, next) {
  BuyRequest.find()
    .limit()
    .skip()
    .exec()
    .then((results) => {

      res.json(results)
    })
    .catch((err) => next(err));
}
exports.getSellRequest = function (req, res, next) {
  SellRequest.find()
    .exec()
    .then((results) => {
      res.json(counter)
    })
    .catch((err) => next(err));
}
