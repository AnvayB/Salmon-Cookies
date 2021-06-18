'use strict'
// Creating an object using constructor notation 

// Create array of hourly + daily sales
let hoursArray = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', 'Daily Location Total'];

// Create an array of stores
let storeArray = [];

let Store = function(location,
   minCust, maxCust, avgCookies, dailySales) {
  this.location = location;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = [];
  this.avgCookies = avgCookies;
  this.dailySales = dailySales;
  }

// **********************************************

// Create instances for each store
let store1 = new Store("Seattle", 23, 65, 6.3, 0)
let store2 = new Store("Tokyo", 3, 24, 1.2, 0)
let store3 = new Store("Dubai", 11, 38, 3.7, 0)
let store4 = new Store("Paris", 20, 38, 2.3, 0)
let store5 = new Store("Lima", 2, 16, 4.6, 0)

storeArray.push(store1, store2, store3, store4, store5)

// Calculate the hourly sales and push them to an avgCust array within the Store object, using a function called createAvgArray
Store.prototype.createAvgArray = function() {
  for (let i = 0; i < hoursArray.length; i++){
      averageSales = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) )+ this.minCust) * this.avgCookies) ;
      this.avgCust.push(averageSales) ;
  }
}

store1.createAvgArray()
store2.createAvgArray()
store3.createAvgArray()
store4.createAvgArray()
store5.createAvgArray()

// Calculate the daily sales (createDailySales) and store it
Store.prototype.createDailySales = function() {
  for (i = 0; i < hoursArray.length; i++) {
       this.dailySales += this.avgCust[i]
  }
}

// Call the dailySales function
store1.createDailySales()
store2.createDailySales()
store3.createDailySales()
store4.createDailySales()
store5.createDailySales()

// **********************************************************************************************
// Now, let's dynamically populate the HTML using the JavaScript variables
let elBody = document.getElementById('salesTable')
let elTable = document.createElement('table')

// setting a class to the table
elTable.setAttribute('id', 'id-table')

// appending the table to the body
elBody.appendChild(elTable)

// append the header of the table to the body
  let elRow = document.createElement('tr')
  elTable.appendChild(elRow) ;

  let elHourHeader = document.createElement('th') ;
      elRow.appendChild(elHourHeader) ;
      console.log(elHourHeader.innerText)
      elRow.appendChild(elHourHeader)

      for (let h = 0; h <= 14; h++) {
          let newText = document.createElement('td') ;
          newText.innerText = hoursArray[h] ;
          elRow.appendChild(newText)
      }

// create a row for the first instance
for (i = 0; i <= storeArray.length - 1; i++) {
  let elRow = document.createElement('tr') ;
  elTable.appendChild(elRow) ; 
  
  let elTh = document.createElement('th') ; 
      elTh.innerText = storeArray[i].location ; 
      elRow.appendChild(elTh)

// loop through the hourly sales, adding the next hourly sales data to a new column 
  for (let j = 0; j < 14; j++) {
          let newText = document.createElement('td') ;
          newText.innerText = storeArray[i].avgCust[j] ;
          elRow.appendChild(newText)
  }
      let newText = document.createElement('td') ;
      newText.innerText = storeArray[i].dailySales ;
      elRow.appendChild(newText)
}

// ***********************************************************************

// Dynamically populate new store instances using the form built in html
let form = document.getElementById('storeForm') 

// Access the html (storeForm) via names in dot.notation; elements can have elements and IDs; however, you would access that by the document.getElementByID
let storeLocation = form.inputLocation ;
let storeMinCust = form.inputMinCust ;
let storeMaxCust = form.inputMaxCust ; 
let storeAvgCookies = form.inputAvgCookies ;

form.addEventListener('submit', function(event) {
  event.preventDefault() ;
  // Access the values in the html, which you do by using .notation (.value), to create a (new) newStore instance
  let newStore = new Store(storeLocation.value, 6, 20, storeMinCust.value, storeMaxCust.value, storeAvgCookies.value, 0) ;
  storeArray.push(newStore) ;

  // Calculate the hourly average sales and the total daily sales
  newStore.createAvgArray() ;
  newStore.createDailySales() ;
  
  // Create a new row and append it to the table you've already created
  let elRow = document.createElement('tr') ;
  elTable.appendChild(elRow) ; 
      
  // Append the table header (newStore.location) to the row
  let elTh = document.createElement('th') ; 
  elTh.innerText = newStore.location ; 
  elRow.appendChild(elTh)

  // Run a loop to insert the hourly sales as 'td' into each column
  for (let j = 0; j < 14; j++) {
      let newText = document.createElement('td') ;
      newText.innerText = newStore.avgCust[j] ;
      elRow.appendChild(newText)
  }
  
  // Insert the daily sales in the last column
  let newText = document.createElement('td') ;
  newText.innerText = newStore.dailySales ;
  elRow.appendChild(newText)
  
})