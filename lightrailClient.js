"use strict";

require('dotenv').config();
var rp = require('request-promise');

var baseURL = 'https://api.lightrail.com/v1/';
var customHeaders = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer ' + process.env.ACCESS_TOKEN
};

// CREATING A CONTACT

// Parameter 'contact' is expected to be an object
// with mandatory property 'id'
// and optional properties 'email', 'firstName', 'lastName'
// **Usage note - this function returns a promise**
function createContact(contact) {
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
}


// CREATING A CARD

// Parameter 'card' is expected to be an object
// with mandatory properties 'id', 'value', and 'programId'
// and optional properties 'categories' and 'contactId'
// **Usage note - this function returns a promise**
function createPointsCard(card) {
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
}

// CHANGING POINTS ON A CARD

// Parameter 'card' is expected to be an object with mandatory property 'lightrailId'
// Parameter 'points' is expected to be a positive or negative integer
// Parameter 'transactionId' will be passed directly to the 'userSuppliedId' field required by the API
function updatePoints(card, points, transactionId) {
  rp({
    method: 'POST',
    uri: baseURL + 'cards/' + card.lightrailId + '/code/transactions',
    headers: customHeaders,
    body: {
      'value': points,
      'currency': 'XXX',
      'userSuppliedId': transactionId
    },
    json: true
  })
  .then(function(returnedTransaction) {
    // TODO: use valueAvailableAfterTransaction
    console.log(returnedTransaction);
  })
  .catch(function(err) {
    // TODO: better error handling
    console.log(err);
  });
}

// CHECKING CARD BALANCE

// Parameter 'card' is expected to be an object with mandatory property 'lightrailId'
function getBalance(card) {
  rp({
    method: 'GET',
    uri: baseURL + 'cards/' + card.lightrailId + '/code/balance',
    headers: customHeaders,
    json: true
  })
  .then(function(balance) {
    // TODO: handle balance instead of logging the object
    console.log(balance);
  })
  .catch(function(err) {
    // TODO: better error handling
    console.log(err);
  });
}


// // FUNCTIONALITY CHECKING
//
// // Contact creation
//
// var sampleContact = {
//   'id': '10101010101010',
//   'email': 'ex@example.com'
// };
// createContact(sampleContact)
// .then(function(returnedContact) {
//   console.log(returnedContact);
// })
// .catch(function(error) {
//   console.log(error);
// });
//
// // Card creation
//
// var card = {
//   'id': '1010101010101010',
//   'lightrailId': 'card-99812714217a460d88383852bdfe0204',
//   'value': '5',
//   'programId': 'program-eb6f3e8b9d7548a0b51b872375f635c3',
//   'categories': {},
//   'contactId': 'contact-f1a7888f803d4e2d815e3d9447fbf276'
// };
// createPointsCard(card)
// .then(function(returnedCard) {
//   console.log(returnedCard);
// })
// .catch(function(err) {
//   console.log(err);
// });
//
// // Updating points on a card
//
// updatePoints(card, 5, 'someexample');
//
// // Checking the balance of points on a card
//
// getBalance(card);
