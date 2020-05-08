
const getSheetData = require('../../controllers/data-grabber.controller');

module.exports = (app) => {
  app.get('/api/refresh', getSheetData);
};
