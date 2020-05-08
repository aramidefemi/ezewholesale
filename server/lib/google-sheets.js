// const {google} = require('googleapis');
// const sheets = google.sheets('v4');

// async function main () {
//   const oauth2Client = new google.auth.OAuth2(
//     YOUR_CLIENT_ID,
//     YOUR_CLIENT_SECRET,
//     YOUR_REDIRECT_URL
//   );
  
//   // generate a url that asks permissions for Blogger and Google Calendar scopes
//   const scopes = [
//     'https://www.googleapis.com/auth/blogger',
//     'https://www.googleapis.com/auth/calendar'
//   ];
//   const authClient = await authorize();
//   const request = {
//     // The spreadsheet to request.
//     spreadsheetId: '1Lw6GjtjVrCdvSXBFDB0ns0RrSx83wnlHI78J0tRpSVg',  // TODO: Update placeholder value.

//     // The ranges to retrieve from the spreadsheet.
//     ranges: [],  // TODO: Update placeholder value.

//     // True if grid data should be returned.
//     // This parameter is ignored if a field mask was set in the request.
//     includeGridData: false,  // TODO: Update placeholder value.

//     auth: authClient,
//   };

//   try {
//     const response = (await sheets.spreadsheets.get(request)).data;
//     // TODO: Change code below to process the `response` object:
//     console.log(JSON.stringify(response, null, 2));
//   } catch (err) {
//     console.error(err);
//   }
// }
// var test = main;

// async function authorize() {
//   // TODO: Change placeholder below to generate authentication credentials. See
//   // https://developers.google.com/sheets/quickstart/nodejs#step_3_set_up_the_sample
//   //
//   // Authorize using one of the following scopes:
//   //   'https://www.googleapis.com/auth/drive'
//   //   'https://www.googleapis.com/auth/drive.file'
//   //   'https://www.googleapis.com/auth/drive.readonly'
//   //   'https://www.googleapis.com/auth/spreadsheets'
//   //   'https://www.googleapis.com/auth/spreadsheets.readonly'
//   let authClient = null;

//   if (authClient == null) {
//     throw Error('authentication failed');
//   }

//   return authClient;
// }

const {
  GoogleSpreadsheet
} = require('google-spreadsheet');

var creds = require('../../config/google-apis-credentials.json');



// Create a document object using the ID of the spreadsheet - obtained from its URL.

var doc = new GoogleSpreadsheet('1Lw6GjtjVrCdvSXBFDB0ns0RrSx83wnlHI78J0tRpSVg');

function test() {
  console.log('starting code here');
  doc.useServiceAccountAuth(creds, function (err) {
    console.log('err',err);
    // Get all of the rows from the spreadsheet.
    console.log('resulting here');
    doc.getRows(1, function (err, rows) {
      console.log('outputing here');
      console.log(rows);

    });

  }).catch((err) => {
    console.log('err 2',err);
  })
  ;
}

module.exports = {
  test
};
