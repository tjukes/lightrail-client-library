// FOR NOW, tests will use real API calls and therefore need access to
// a real access token
require('dotenv').config();

describe("Lightrail", function() {
  var Lightrail = require('../lightrailClient.js');
  var lr;

  it("should be constructed from the constructor", function() {
    lr = new Lightrail(process.env.ACCESS_TOKEN);
    expect(lr instanceof Lightrail).toBe(true);
  });

});
