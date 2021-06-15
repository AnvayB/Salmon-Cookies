'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//Seattle
const seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookiesSale: 6.3,
  id: 'seattle',
  cookiesPerHour: [],

  totalCookies: 0,
  custPerHour: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i = 0; i < hours.length; i++) {
  seattle.cookiesPerHour.push(Math.ceil(seattle.custPerHour(seattle.minCust, seattle.maxCust)*seattle.avgCookiesSale));
}

seattle.dailyTotal = function(){
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    seattle.totalCookies += this.cookiesPerHour[i];
  }
};

seattle.display= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i < this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `Total: ${seattle.totalCookies} cookies`;
  referenceUl.append(liElement);
};

seattle.dailyTotal();
seattle.display();

//Tokyo
const tokyo = {
  minCustomers: 3,
  maxCustomer: 24,
  avgCookiesSold: 1.2,
  id: 'tokyo',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i = 0; i < hours.length; i++) {
  tokyo.cookiesPerHour.push(Math.ceil(tokyo.hourlyCustomer(tokyo.minCustomers,tokyo.maxCustomer)*tokyo.avgCookiesSold));
}

tokyo.dailyTotal = function(){
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    tokyo.totalCookies += this.cookiesPerHour[i];
  }
};

tokyo.display= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i < this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `Total: ${tokyo.totalCookies} cookies`;
  referenceUl.append(liElement);
};

tokyo.dailyTotal();
tokyo.display();

//Dubai
const dubai = {
  minCustomers: 11,
  maxCustomer: 38,
  avgCookiesSold: 3.7,
  id: 'dubai',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i = 0; i < hours.length; i++) {
  dubai.cookiesPerHour.push(Math.ceil(dubai.hourlyCustomer(dubai.minCustomers,dubai.maxCustomer)*dubai.avgCookiesSold));
}

dubai.dailyTotal = function(){
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    dubai.totalCookies += this.cookiesPerHour[i];
  }
};

dubai.display= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i < this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `Total: ${dubai.totalCookies} cookies`;
  referenceUl.append(liElement);
};

dubai.dailyTotal();
dubai.display();


//Paris
const paris = {
  minCustomers: 20,
  maxCustomer: 38,
  avgCookiesSold: 2.3,
  id: 'paris',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i= 0; i < hours.length; i++) {
  paris.cookiesPerHour.push(Math.ceil(paris.hourlyCustomer(paris.minCustomers,paris.maxCustomer)*paris.avgCookiesSold));
}

paris.dailyTotal = function(){
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    paris.totalCookies += this.cookiesPerHour[i];
  }
};

paris.display= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i < this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `Total: ${paris.totalCookies} cookies`;
  referenceUl.append(liElement);
};

paris.dailyTotal();
paris.display();


//Lima
const lima = {
  minCustomers: 2,
  maxCustomer: 16,
  avgCookiesSold: 4.6,
  id: 'lima',
  cookiesPerHour:[],

  totalCookies: 0,
  hourlyCustomer: function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  },
};

for(var i = 0; i < hours.length; i++) {
  lima.cookiesPerHour.push(Math.ceil(lima.hourlyCustomer(lima.minCustomers,lima.maxCustomer)*lima.avgCookiesSold));
}

lima.dailyTotal = function(){
  for(var i = 0; i < this.cookiesPerHour.length; i++){
    lima.totalCookies += this.cookiesPerHour[i];
  }
};

lima.display= function(){
  var referenceUl = document.getElementById(this.id);
  for(var i = 0; i < this.cookiesPerHour.length; i++){

    var liElement = document.createElement('li');

    liElement.textContent = `${hours[i]}: ${this.cookiesPerHour[i]} cookies`;

    referenceUl.append(liElement);
  }
  liElement.textContent = `Total: ${lima.totalCookies} cookies`;
  referenceUl.append(liElement);
};

lima.dailyTotal();
lima.display();