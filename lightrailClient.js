"use strict";

require('dotenv').config();
var rp = require('request-promise');

var baseURL = 'https://api.lightrail.com/v1/';
var customHeaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
};


function Lightrail() {}

// **Usage note - these functions each return a promise**

// CREATING A CONTACT

// Parameter 'contact' is expected to be an object
// with mandatory property 'id'
// and optional properties 'email', 'firstName', 'lastName'
Lightrail.prototype.createContact = function(contact) {
  // TODO: validate argument
  return rp({
    method: 'POST',
    uri: baseURL + 'contacts',
    headers: customHeaders,
    body: {
      'userSuppliedId': contact.id,
      // TODO: handle undefined optional properties
      'email': contact.email,
      'firstName': contact.firstName,
      'lastName': contact.lastName
    },
    json: true
  });
};


// CREATING A CARD

// Parameter 'card' is expected to be an object
// with mandatory properties 'id', 'value', and 'programId'
// and optional properties 'categories' and 'contactId'
Lightrail.prototype.createPointsCard = function(card) {
  // TODO: validate argument
  return rp({
    method: 'POST',
    uri: baseURL + 'cards',
    headers: customHeaders,
    body: {
      'userSuppliedId': card.id,
      'code': {
        'initialValue': card.value,
        // Since this is a points card, hardcode to non-currency
        'currency': 'XXX',
        'programId': card.programId
      },
      // TODO: handle undefined for optional fields (eg default to {} or '')
      'categories': card.categories,
      'contactId': card.contactId
    },
    json: true
  });
};

// CHANGING POINTS ON A CARD

// Parameter 'card' is expected to be an object with mandatory property 'lightrailId'
// Parameter 'points' is expected to be a positive or negative integer
// Parameter 'transactionId' will be passed directly to the 'userSuppliedId' field required by the API
Lightrail.prototype.updatePoints = function(card, points, transactionId) {
  return rp({
    method: 'POST',
    uri: baseURL + 'cards/' + card.lightrailId + '/code/transactions',
    headers: customHeaders,
    body: {
      'value': points,
      'currency': 'XXX',
      'userSuppliedId': transactionId
    },
    json: true
  });
};

// CHECKING CARD BALANCE

// Parameter 'card' is expected to be an object with mandatory property 'lightrailId'
Lightrail.prototype.getBalance = function(card) {
  return rp({
    method: 'GET',
    uri: baseURL + 'cards/' + card.lightrailId + '/code/balance',
    headers: customHeaders,
    json: true
  });
};


module.exports = Lightrail;
