
const controller = require('../../controllers/products.controller');

module.exports = (app) => {
  app.get('/api/products/buyrequests', controller.getBuyRequest);
  app.get('/api/products/sellrequests', controller.getSellRequest);
  app.post('/api/products/buyrequests', controller.searchBuyRequest);
  app.post('/api/products/sellrequests', controller.searchSellRequest); 
};
