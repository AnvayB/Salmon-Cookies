'use strict';

var hours = [' ','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Total'];

let locations = [];
let referenceTable = document.getElementById('cookiestable');
let grandTotal = 0;
let totalPerHourArray = [];

function sales (minCust, maxCust, avgCookiesSale, id){
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiesSale = avgCookiesSale;
  this.id = id;
  this.cookiesPerHour = [];
  this.totalCookies = 0;

  locations.push(this);

  this.custPerHour = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  this.totalPerHour = function() {
    for (let i = 1; i < hours.length-1; i++){
      this.cookiesPerHour.push(Math.ceil(this.custPerHour(this.minCust, this.maxCust) * this.avgCookiesSale));
    }
  };
  this.totalPerDay = function() {
    for (let i = 0; i < this.cookiesPerHour.length; i++){
      this.totalCookies += this.cookiesPerHour[i];
    }
  };

  this.render = function() {
    let row = document.createElement('tr');
    let data = document.createElement('td');
    data.textContent = this.id;
    row.append(data);
    for (let i = 0; i < this.cookiesPerHour.length; i++){
      data = document.createElement('td');
      data.textContent = this.cookiesPerHour[i];
      row.append(data);
    }
    data = document.createElement('td');
    data.textContent = this.totalCookies;
    row.append(data);
    referenceTable.append(row);
  };

  this.daysInfo = function() {
    this.totalPerHour();
    this.totalPerDay();
    this.render();
  };
}

function renderHeader() {
  let headRow = document.createElement('tr');
  for (let i = 0; i < hours.length; i++){
    let header = document.createElement('th');
    header.textContent = (hours[i]);
    headRow.append(header);
  }
  let referenceTable = document.getElementById('cookiestable');
  referenceTable.append(headRow);
}

renderHeader();

let seattle = new sales(23,65,6.3, 'Seattle');
seattle.daysInfo();

let tokyo = new sales(3,24,1.2, 'Tokyo');
tokyo.daysInfo();

let dubai = new sales(11,38,3.7, 'Dubai');
dubai.daysInfo();

let paris = new sales(20,38,2.3, 'Paris');
paris.daysInfo();

let lima = new sales(2,16,4.6, 'Lima');
lima.daysInfo();










// //Seattle
// const seattle = {
//   minCust: 23,
//   maxCust: 65,
//   avgCookiesSale: 6.3,
//   id: 'seattle',
//   cookiesPerHour: [],

//   totalCookies: 0,
//   custPerHour: function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// for(var i = 0; i < hours.length; i++) {
//   seattle.cookiesPerHour.push(Math.ceil(seattle.custPerHour(seattle.minCust, seattle.maxCust)*seattle.avgCookiesSale));
// }

// seattle.dailyTotal = function(){
//   for(var i = 0; i < this.cookiesPerHour.length; i++){
//     seattle.totalCookies += this.cookiesPerHour[i];
//   }
// };


// seattle.render= function(){
//   var referenceUl = document.getElementById(this.id);
//   for(var i = 0; i < this.cookiesPerHour.length; i++){

//     var liElement = document.createElement('li');

//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

//     referenceUl.append(liElement);
//   }
//   liElement.textContent = `Total: ${seattle.totalCookies} cookies`;
//   referenceUl.append(liElement);
// };

// seattle.dailyTotal();
// seattle.render();

// //Tokyo
// const tokyo = {
//   minCust: 3,
//   maxCust: 24,
//   avgCookiesSold: 1.2,
//   id: 'tokyo',
//   cookiesPerHour:[],

//   totalCookies: 0,
//   hourlyCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// for(var i = 0; i < hours.length; i++) {
//   tokyo.cookiesPerHour.push(Math.ceil(tokyo.hourlyCustomer(tokyo.minCust,tokyo.maxCust)*tokyo.avgCookiesSold));
// }

// tokyo.dailyTotal = function(){
//   for(var i = 0; i < this.cookiesPerHour.length; i++){
//     tokyo.totalCookies += this.cookiesPerHour[i];
//   }
// };

// tokyo.render= function(){
//   var referenceUl = document.getElementById(this.id);
//   for(var i = 0; i < this.cookiesPerHour.length; i++){

//     var liElement = document.createElement('li');

//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

//     referenceUl.append(liElement);
//   }
//   liElement.textContent = `Total: ${tokyo.totalCookies} cookies`;
//   referenceUl.append(liElement);
// };

// tokyo.dailyTotal();
// tokyo.render();

// //Dubai
// const dubai = {
//   minCust: 11,
//   maxCust: 38,
//   avgCookiesSold: 3.7,
//   id: 'dubai',
//   cookiesPerHour:[],

//   totalCookies: 0,
//   hourlyCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// for(var i = 0; i < hours.length; i++) {
//   dubai.cookiesPerHour.push(Math.ceil(dubai.hourlyCustomer(dubai.minCust,dubai.maxCust)*dubai.avgCookiesSold));
// }

// dubai.dailyTotal = function(){
//   for(var i = 0; i < this.cookiesPerHour.length; i++){
//     dubai.totalCookies += this.cookiesPerHour[i];
//   }
// };

// dubai.render= function(){
//   var referenceUl = document.getElementById(this.id);
//   for(var i = 0; i < this.cookiesPerHour.length; i++){

//     var liElement = document.createElement('li');

//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

//     referenceUl.append(liElement);
//   }
//   liElement.textContent = `Total: ${dubai.totalCookies} cookies`;
//   referenceUl.append(liElement);
// };

// dubai.dailyTotal();
// dubai.render();


// //Paris
// const paris = {
//   minCust: 20,
//   maxCust: 38,
//   avgCookiesSold: 2.3,
//   id: 'paris',
//   cookiesPerHour:[],

//   totalCookies: 0,
//   hourlyCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// for(var i= 0; i < hours.length; i++) {
//   paris.cookiesPerHour.push(Math.ceil(paris.hourlyCustomer(paris.minCust,paris.maxCust)*paris.avgCookiesSold));
// }

// paris.dailyTotal = function(){
//   for(var i = 0; i < this.cookiesPerHour.length; i++){
//     paris.totalCookies += this.cookiesPerHour[i];
//   }
// };

// paris.render= function(){
//   var referenceUl = document.getElementById(this.id);
//   for(var i = 0; i < this.cookiesPerHour.length; i++){

//     var liElement = document.createElement('li');

//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

//     referenceUl.append(liElement);
//   }
//   liElement.textContent = `Total: ${paris.totalCookies} cookies`;
//   referenceUl.append(liElement);
// };

// paris.dailyTotal();
// paris.render();


// //Lima
// const lima = {
//   minCust: 2,
//   maxCust: 16,
//   avgCookiesSold: 4.6,
//   id: 'lima',
//   cookiesPerHour:[],

//   totalCookies: 0,
//   hourlyCustomer: function (min, max) {
//     return Math.floor(Math.random() * (max - min)) + min;
//   },
// };

// for(var i = 0; i < hours.length; i++) {
//   lima.cookiesPerHour.push(Math.ceil(lima.hourlyCustomer(lima.minCust,lima.maxCust)*lima.avgCookiesSold));
// }

// lima.dailyTotal = function(){
//   for(var i = 0; i < this.cookiesPerHour.length; i++){
//     lima.totalCookies += this.cookiesPerHour[i];
//   }
// };

// lima.render= function(){
//   var referenceUl = document.getElementById(this.id);
//   for(var i = 0; i < this.cookiesPerHour.length; i++){

//     var liElement = document.createElement('li');

//     liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

//     referenceUl.append(liElement);
//   }
//   liElement.textContent = `Total: ${lima.totalCookies} cookies`;
//   referenceUl.append(liElement);
// };

// lima.dailyTotal();
// lima.render();


// console.log(seattle);
// console.log(tokyo);
// console.log(dubai);
// console.log(paris);
// console.log(lima);
