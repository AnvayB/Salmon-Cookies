'use strict';

var hours = [' ','6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];

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

// function createFooter() {
//   //access the footer elem tfootElem parent
//   //varaible for hourly total
//   let hourlyTotal = 0;
//   let grandTotal = 0;
//   //variable for all hours total
//   //I maketd for rthe data to go to and append to footer
//   const rowElem = document.createElement('tr');
//   tfootElem.appendChild(rowElem);
//   //I need to look at every hour of the day
//   //--
//   for (let i = 0; i < hours.length; i++){
//     for (let j = 0; j < sales.hours.length; j++){
//       let timeOfSale = totalPerHour[i];
//       let currentStore = sales.hours[j];
//       let currentStoreAtCurrentHr = currentStore[timeOfSale];
//       totalPerHour += currentStoreAtCurrentHr;
//     }
  
//   //for each hour of the day, I need to look at the sales for each store AT THAT HOUR
//   //--
//   //add a th for every hourly total
//   //reset the hourly total to 0
//   //---
//   const hourlyThElem = document.createElement('th');
//   hourlyThElem.textContent = totalPerHour;
//   rowElem.appendChild(hourlyThElem);
//   grandTotal += totalPerHour;
//   totalPerHour = 0;
//   }
//   //add th for the grand total

// }

function footerCalculator(){
  for(var i = 0; i < hours.length; i++){
    var totalPerHour = 0;
    for(var j = 0; j < locations.length; j++){
      totalPerHour += locations[j].cookiesPerHour[i];
    }
    grandTotal += totalPerHour;
    totalPerHourArray[i] = totalPerHour;
  }
}

function renderFooter() {
  var trFoot = document.createElement('tr');
  var tdElement = document.createElement('td');
  tdElement.textContent = 'Hourly totals';
  trFoot.append(tdElement);
  for(var i = 0; i < hourlyTotalsArray.length; i++){
    var thElement = document.createElement('td');
    thElement.textContent = (hourlyTotalsArray[i]);
    trFoot.append(thElement);
  }
  var tdTotalFoot = document.createElement('td');
  tdTotalFoot.textContent = (grandTotal);
  trFoot.append(tdTotalFoot);
  var referenceTable = document.getElementById('footer');
  referenceTable.append(trFoot);
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

// createFooter();

footerCalculator();