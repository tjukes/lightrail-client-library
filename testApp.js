"use strict";

require('dotenv').config();

var Lightrail = require('./lightrailClient.js');

var LR = new Lightrail(process.env.ACCESS_TOKEN);

console.log(LR);

// // FUNCTIONALITY CHECKING
//
// // Contact creation
//
// var sampleContact = {
//   'id': '10101010101010234',
//   'email': 'ex@example.com'
// };
// LR.createContact(sampleContact)
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
// LR.createPointsCard(card)
// .then(function(returnedCard) {
//   console.log(returnedCard);
// })
// .catch(function(err) {
//   console.log(err);
// });
//
// // Updating points on a card
//
// LR.updatePoints(card, 5, 'someexample')
// .then(function(returnedTransaction) {
//   console.log(returnedTransaction);
// })
// .catch(function(err) {
//   console.log(err);
// });
//
// // Checking the balance of points on a card
//
// LR.getBalance(card)
// .then(function(balance) {
//   console.log(balance);
// })
// .catch(function(err) {
//   console.log(err);
// });
