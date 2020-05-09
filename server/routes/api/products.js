
const controller = require('../../controllers/products.controller');

module.exports = (app) => {
  app.get('/api/products/buyrequests', controller.getBuyRequest);
  app.get('/api/products/sellrequests', controller.getSellRequest);
  app.get('/api/products/buyrequests/:term', controller.getBuyRequest);
  app.get('/api/products/sellrequests/:term', controller.getBuyRequest); 
};
