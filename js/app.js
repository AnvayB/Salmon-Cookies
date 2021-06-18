let Sales = function(location, open, close, minCust, maxCust, avgCookies, dailySales) {
  this.location = location;
  this.open = open; 
  this.close = close; 
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCust = [];
  this.avgCookies = avgCookies;
  this.dailySales = dailySales;
  }

// Array of all stores
let allStoresArray = []

// Array of all timings and daily total/location
let hoursArray = ["6:00 AM", "7:00 AM", "8:00AM", "9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "Daily Total"];
// create instance for each store
let store1 = new Sales("Seattle", 6, 20, 23, 65, 6.3, 0)
let store2 = new Sales("Tokyo", 6, 20, 3, 24, 1.2, 0)
let store3 = new Sales("Paris", 6, 20, 11, 38, 3.7, 0)
let store4 = new Sales("Dubai", 6, 20, 20, 38, 2.3, 0)
let store5 = new Sales("Lima", 6, 20, 2, 16, 4.6, 0)

allStoresArray.push(store1, store2, store3, store4, store5)

// make createAvgArray function to calculate hourly sales and push them into avgCust array
Sales.prototype.createAvgArray = function() {
  for (let i = this.open; i < this.close; i++){
      averageSales = Math.round((Math.floor(Math.random() * (this.maxCust - this.minCust + 1) )+ this.minCust) * this.avgCookies);
      this.avgCust.push(averageSales);
  }
}

store1.createAvgArray()
store2.createAvgArray()
store3.createAvgArray()
store4.createAvgArray()
store5.createAvgArray()

// Add all sales from location into Daily Sales section
Sales.prototype.createDailySales = function() {
  for (i = 0; i < (this.close - this.open); i++) {
       this.dailySales += this.avgCust[i]
  }
}

store1.createDailySales()
store2.createDailySales()
store3.createDailySales()
store4.createDailySales()
store5.createDailySales()


// Add into Sales Data table
let bodyElem = document.getElementById('salesTable')
let tableElem = document.createElement('table')

// assign table to a class value
tableElem.setAttribute('id', 'id-table')

// append table to body section
bodyElem.appendChild(tableElem)

// append header of table to body
  let rowElem = document.createElement('tr')
  tableElem.appendChild(rowElem);

  let headerHoursElem = document.createElement('th');
      rowElem.appendChild(headerHoursElem);
      console.log(headerHoursElem.innerText)
      rowElem.appendChild(headerHoursElem)

      for (let h = 0; h <= 14; h++) {
          let newText = document.createElement('td');
          newText.innerText = hoursArray[h];
          rowElem.appendChild(newText)
      }

// create a row for the first instance
for (i = 0; i <= allStoresArray.length - 1; i++) {
  let rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem); 
  
  let tableHeadElem = document.createElement('th');
      tableHeadElem.innerText = allStoresArray[i].location;
      rowElem.appendChild(tableHeadElem)

// loop through the hourly sales, adding the next hourly sales data to a new column 
  for (let j = 0; j < 14; j++) {
          let newText = document.createElement('td');
          newText.innerText = allStoresArray[i].avgCust[j];
          rowElem.appendChild(newText)
  }
      let newText = document.createElement('td');
      newText.innerText = allStoresArray[i].dailySales;
      rowElem.appendChild(newText)
}



// Dynamically populate new store instances using the form built in html
let form = document.getElementById('storeForm') 

// Access the html (storeForm) via names in dot.notation; elements can have elements and IDs; however, you would access that by the document.getElementByID
let storeLocation = form.inputLocation;
let storeMinCust = form.inputMinCust;
let storeMaxCust = form.inputMaxCust;
let storeAvgCookies = form.inputAvgCookies;

form.addEventListener('submit', function(event) {
  event.preventDefault();
  // Access the values in the html, which you do by using .notation (.value), to create a (new) newStore instance
  let newStore = new Sales(storeLocation.value, 6, 20, storeMinCust.value, storeMaxCust.value, storeAvgCookies.value, 0);
  allStoresArray.push(newStore);

  // Calculate the hourly average sales and the total daily sales
  newStore.createAvgArray();
  newStore.createDailySales();
  
  // Create a new row and append it to the table you've already created
  let rowElem = document.createElement('tr');
  tableElem.appendChild(rowElem);
      
  // Append the table header (newStore.location) to the row
  let tableHeadElem = document.createElement('th'); 
  tableHeadElem.innerText = newStore.location;
  rowElem.appendChild(tableHeadElem)

  // Run a loop to insert the hourly sales as 'td' into each column
  for (let j = 0; j < 14; j++) {
      let newText = document.createElement('td');
      newText.innerText = newStore.avgCust[j];
      rowElem.appendChild(newText)
  }
  
  // Insert the daily sales in the last column
  let newText = document.createElement('td');
  newText.innerText = newStore.dailySales;
  rowElem.appendChild(newText)
  
})