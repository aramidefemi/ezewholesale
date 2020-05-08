// const Counter = require('../../models/Counter');
const Sheets = require('../lib/google-sheets');
const Async = require('async');
const Stock = require('../lib/google-sheet-cell');
const BuyRequest = require('../models/buyrequest.model');
const SellRequest = require('../models/sellrequest.model');


const getSheetData = async function (req, res, next) {
  var sheet = await Sheets.accessSpreedSheet();
  await sheet.loadCells('A1:U66');
  const devices = Stock.iphones;
  const grades = Stock.grades;

  Async.forEach(devices, (device, nextDevice) => {
      let storages = new Array(device.position.storage).fill('blank').map((i, index) => {
        return sheet.getCell(device.position.start + index, 1).value;
      });
      Async.forEach(storages, (storage, nextStorage) => {
          Async.forEach(grades, (grade, nextGrade) => {

              Async.waterfall([
                done => {
                  let cell = sheet.getCell(device.position.start + storages.indexOf(storage), grades.indexOf(grade) + 2);
                  const buyRequest = new BuyRequest({
                    name: device.name,
                    price: cell.value,
                    condition: grade,
                    storageCapacity: storage,
                  });

                  buyRequest.save()
                    .then(() => done())
                    .catch((err) => done(err));

                },
                done => {
                  let cell = sheet.getCell(device.position.start + storages.indexOf(storage), grades.indexOf(grade) + 13);
                  const sellRequest = new SellRequest({
                    name: device.name,
                    price: cell.value,
                    condition: grade,
                    storageCapacity: storage,
                  });

                  sellRequest.save()
                    .then(() => done())
                    .catch((err) => done(err));
                },
              ], (err) => {
                if (err) {
                  console.error(err);
                }
                nextGrade()
              });
            },
            (err) => {
              if (err) {
                console.error(err);
              }
              nextStorage();
            });
        },
        (err) => {
          if (err) {
            console.error(err);
          }
          nextDevice();
        });
    },
    (err) => {
      if (err) {
        console.error(err);
      }
      res.json(devices);
    });
}

module.exports = getSheetData;
