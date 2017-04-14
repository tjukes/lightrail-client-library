# lightrail-client-library
A simple Javascript/Node client library for the Lightrail API

It offers basic functionality: contact creation, card creation for tracking points, updating points, checking points balance.

### Use

This library assumes that you have an existing Lightrail account and have created a Program for allocating loyalty points to Contacts. You will need your access token and program ID for several functions.

Install this library: `npm install --save https://github.com/tjukes/lightrail-client-library`

Require it in your script: `var Lightrail = require('lightrail-client');`

Instantiate a new 'Lightrail' by calling the constructor and passing in your access token: eg, `var LR = new Lightrail(process.env.ACCESS_TOKEN);` if you have it stored as an environment variable

### Testing

Tests are provided with Jasmine. To run the tests, run either `jasmine` or `npm test`.

Note, test coverage is currently incomplete. Sample method calls (manual tests) are provided in the `testApp.js` file. To use this file to check functionality manually, uncomment the relevant lines in the bottom of the file that pertain to which function/s you want to check and **change the specific IDs in the sample object to ones that refer to a card, program, and contact you already have**. Run the file from your terminal with Node. Results from successful API calls should print out as JSON.
