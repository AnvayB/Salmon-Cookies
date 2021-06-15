'use strict'

//cookies purchased per hour = avgCookieSale * custPerHour

const Seattle = {
  // customers: 0,
  munCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function () {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}

const Tokyo = {
  customers: 0,
  munCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function () {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}

const Dubai = {
  customers: 0,
  munCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour: function () {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),
}

const Paris = {
  customers: 0,
  munCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function () {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}

const Lima = {
  customers: 0,
  munCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function () {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}