// Creating an object using constructor notation 
// Added opening (6AM) and closing (8PM) hours

let Store = function(location, open, close, minCust, maxCust, avgCookies, dailySales) {
  this.location = location;
  this.open = open; // use military time (only hour) for this
  this.close = close; // use military time (only hour) for this
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = [];
  this.avgCookies = avgCookies;
  this.dailySales = dailySales;
  }

// Create an array of stores
let storeArray = []

// Create array of hourly + daily sales
let hoursArray = ["6:00 AM", "7:00 AM", "8:00AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "Daily Total"];

// **********************************************

// Create instances for each store
let storeOne = new Store("Seattle", 6, 20, 23, 65, 6.3, 0)
let storeTwo = new Store("Tokyo", 6, 20, 3, 24, 1.2, 0)
let storeThree = new Store("Paris", 6, 20, 11, 38, 3.7, 0)
let storeFour = new Store("Dubai", 6, 20, 20, 38, 2.3, 0)
let storeFive = new Store("Lima", 6, 20, 2, 16, 4.6, 0)

storeArray.push(storeOne, storeTwo, storeThree, storeFour, storeFive)

// Calculate the hourly sales and push them to an avgCust array within the Store object, using a function called createAvgArray
Store.prototype.createAvgArray = function() {
  for (let i = this.open; i < this.close; i++){
      averageSales = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) )+ this.minCust) * this.avgCookies) ;
      this.avgCust.push(averageSales) ;
  }
}

storeOne.createAvgArray()
storeTwo.createAvgArray()
storeThree.createAvgArray()
storeFour.createAvgArray()
storeFive.createAvgArray()

// Calculate the daily sales (createDailySales) and store it
Store.prototype.createDailySales = function() {
  for (i = 0; i < (this.close - this.open); i++) {
       this.dailySales += this.avgCust[i]
  }
}

// Call the dailySales function
storeOne.createDailySales()
storeTwo.createDailySales()
storeThree.createDailySales()
storeFour.createDailySales()
storeFive.createDailySales()

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