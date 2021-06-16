'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var allStores = [];
var referenceTable = document.getElementById('cookie-table');
var grandTotal = 0;
var hourlyTotalsArray = [];

function StoreSales(minimumCustomers, maximumCustomers, averageCookiesSold, id) {
  this.minimumCustomers = minimumCustomers;
  this.maximumCustomer = maximumCustomers;
  this.averageCookiesSold = averageCookiesSold;
  this.id = id;
  this.cookiesSoldPerHour = [],
  this.totalCookies = 0;

  allStores.push(this);

  this.hourlyCustomer = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };
  this.hourlyTotals = function() {
    for ( var i = 0; i < hours.length; i++) {
      this.cookiesSoldPerHour.push(Math.ceil(this.hourlyCustomer(this.minimumCustomers, this.maximumCustomer) * this.averageCookiesSold));
    }
  };
  this.dailyTotal = function(){
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
      this.totalCookies += this.cookiesSoldPerHour[i];
    }
  };
  this.dailyStats = function(){
    this.hourlyTotals();
    this.dailyTotal();
    this.render();
  };
  this.render = function(){
    var trElement = document.createElement('tr');
    var tdElement = document.createElement('td');
    tdElement.textContent = this.id;
    trElement.append(tdElement);
    for(var i = 0; i < this.cookiesSoldPerHour.length; i++){
      tdElement = document.createElement('td');
      tdElement.textContent = this.cookiesSoldPerHour[i];
      trElement.append(tdElement);
    }
    tdElement = document.createElement('td');
    tdElement.textContent = this.totalCookies;
    trElement.append(tdElement);
    referenceTable.append(trElement);
  };
}

function renderHeader() {
  var trHead = document.createElement('tr');
  for(var i = 0; i < hours.length; i++){
    var thElement = document.createElement('th');
    thElement.textContent = (hours[i]);
    trHead.append(thElement);
  }
  var referenceTable = document.getElementById('cookie-table');
  referenceTable.append(trHead);
}


function footerCalculator(){
  for(var i = 0; i < hours.length; i++){
    var hourlyTotal = 0;
    for(var j = 0; j < allStores.length; j++){
      hourlyTotal += allStores[j].cookiesSoldPerHour[i];
    }
    grandTotal += hourlyTotal;
    hourlyTotalsArray[i] = hourlyTotal;
  }
}

renderHeader();

var pike = new StoreSales(23, 65, 6.3, 'First and Pike');
var seaTac = new StoreSales(3, 24, 1.2, 'Seatac');
var seaCenter = new StoreSales(11, 38, 3.7, 'Seattle Center');
var capHill = new StoreSales(20, 38, 2.3, 'Capitol Hill');
var alki = new StoreSales(2, 16, 4.6, 'Alki Beach');


pike.dailyStats();
seaTac.dailyStats();
seaCenter.dailyStats();
capHill.dailyStats();
alki.dailyStats();

footerCalculator();
console.log(grandTotal);