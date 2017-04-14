// FOR NOW, tests will use real API calls and therefore need access to
// a real access token
require('dotenv').config();

describe("Lightrail", function() {
  var Lightrail = require('../lightrailClient.js');
  var lr;

  function getRandomId() {
    return Math.ceil(Math.random()*1000000000000).toString();
  }

  function getRandomShortText() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
  }

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


  describe("Lightrail contact creation - async", function() {
    beforeEach(function() {
      lr = new Lightrail(process.env.ACCESS_TOKEN);
    });

    it("should create a contact with valid parameters", function(done) {
      var contact = {
        'id': getRandomId(),
        'email': getRandomShortText() + '@example.com',
        'firstName': getRandomShortText(),
        'lastName': getRandomShortText()
      };
      lr.createContact(contact)
      .then(function(returnedContact) {
        expect(returnedContact.contact.contactId).toContain('contact');
        done();
      });
    });

    it("should create a contact when optional parameters not present", function(done) {
      var contact = { 'id': getRandomId() };
      lr.createContact(contact)
      .then(function(returnedContact) {
        expect(returnedContact.contact.contactId).toContain('contact');
        done();
      });
    });

  });
});
