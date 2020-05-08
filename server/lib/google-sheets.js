const {
  GoogleSpreadsheet
} = require('google-spreadsheet');
const  { promisify } = require('util');

var creds = require('../../config/google-apis-credentials.json');



// Create a document object using the ID of the spreadsheet - obtained from its URL.

var doc = new GoogleSpreadsheet('1F6BvjBRKMf6cVTzrb3O-4uORjnhHN0I6DC9jkuxQibo');

async function accessSpreedSheet() {
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();  
  const sheet = doc.sheetsByIndex[1]; 
  return sheet;
}

module.exports = {
  accessSpreedSheet
};
