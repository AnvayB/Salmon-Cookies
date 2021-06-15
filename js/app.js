'use strict'

const Seattle = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  custPerHour: function() {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

  cookies: [],
  cookieHr: function() {

  },
  

}

const Tokyo = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  custPerHour: function() {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}

const Dubai = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  custPerHour: function() {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),
}

const Paris = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  custPerHour: function() {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}

const Lima = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  custPerHour: function() {
    return Math.float(Math.random)* 100;
  },
  cookiesPurchased: avgCookieSale * custPerHour(),

}