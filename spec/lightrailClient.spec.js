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

  it("should not be constructed without a string passed in as access token", function() {
    var lrEmpty = function() { new Lightrail(); };
    var lrNull = function() { new Lightrail(null); };
    var lrUndefined = function() { new Lightrail(undefined); };
    var lrNumber = function() { new Lightrail(123); };
    var lrObject = function() { new Lightrail({'foo': 'bar'}); };

    expect(lrEmpty).toThrow();
    expect(lrNull).toThrow();
    expect(lrUndefined).toThrow();
    expect(lrNumber).toThrow();
    expect(lrObject).toThrow();
  });
});
