# lightrail-client-library
A simple Javascript/Node client library for the Lightrail API

### Setup

Run `npm install` to install dependencies.

This library has the following dependencies:
- `request-promise` to make async requests to the API
- `request` to support `request-promise` (peer dependency)

### Your API access token

It is the responsibility of the client to pass their access token to the constructor function (`new Lightrail(access_token)`).

For the time being, this is done in the 'testApp.js' file by storing the access token as an environment variable and useing the 'dotenv' library to read it. To set this up: create a `.env` file in the root directory of your project. In that file, add your access token in this format (note, no quotation marks around any part of it):
`ACCESS_TOKEN=your-lightrail-access-token`

### Testing

Tests are provided with Jasmine. To run the tests, run either `jasmine` or `npm test`.

Note, test coverage is currently incomplete. Sample method calls (manual tests) are provided in the `testApp.js` file. To use this file to check functionality manually, uncomment the relevant lines in the bottom of the file that pertain to which function/s you want to check and **change the specific IDs in the sample object to ones that refer to a card, program, and contact you already have**. Run the file from your terminal with Node. Results from successful API calls should print out as JSON.
