# lightrail-client-library
A simple Javascript/Node client library for the Lightrail API

### Setup

Run `npm install` to install dependencies.

This library has the following dependencies:
- `dotenv` to configure & read environment variables from the file `.env`
- `request-promise` to make async requests to the API
- `request` to support `request-promise` (peer dependency)

### Reading your API access token from process.env

Create a `.env` file in the root directory of your project. In that file, add your access token in this format (note, no quotation marks around any part of it):
`ACCESS_TOKEN=your-lightrail-access-token`

### Testing

Tests will be incorporated soon. To test functionality manually, uncomment the lines at the bottom of `lightrailClient.js` that create a sample contact object and call the API with it, then run the file from your terminal with Node. The newly created Lightrail contact should print out as JSON. 
