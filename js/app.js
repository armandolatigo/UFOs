// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");

  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
trackedFilters = {}


// 3. Use this function to update the filters. 
function updateFilters() {

    // 4a. Save the element that was changed as a variable.
    let changedElement = d3.select(this)

    // 4b. Save the value that was changed as a variable.
    let changedValue = changedElement.property("value");
    console.log("Changed Value: " + changedValue);

    // 4c. Save the id of the filter that was changed as a variable.
    let changedId = changedElement.attr("id");
    console.log("Changed id: " + changedId);

    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    if (changedValue) {

      trackedFilters[changedId] = changedValue;
      console.log("trackedFilters[changedId]: " + trackedFilters[changedId]);

    } else {

      delete trackedFilters[changedId];

    }
 
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
  
  }
  
  // 7. Use this function to filter the table when data is entered.
  function filterTable() {
  
    // 8. Set the filtered data to the tableData.
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#city").property("value");
    let state = d3.select("#state").property("value");
    let country = d3.select("#country").property("value");
    let shape = d3.select("#shape").property("value");

  
    // 9. Loop through all of the filters and keep any data that
    // matches the filter values

    let filteredData = tableData;
    console.log("Rows Before: " + filteredData.length);

      if (date || city || state || country || shape) { // || country
        if (date) {
          console.log("Date: " + date);
            filteredData = filteredData.filter((row) => {
              console.log("Row: " + row.datetime)
              return row.datetime === date;
            })
        }

        if (city) {
            filteredData = filteredData.filter(row => row.city === city);
            
        }
        
        if (state) {
            filteredData = filteredData.filter(row => row.state === state);
        }

        if (country) {
            filteredData = filteredData.filter(row => row.country === country);
        }

        if (shape) {
            filteredData = filteredData.filter(row => row.shape === shape);
        }
    }
    
    console.log("Rows After: " + filteredData.length);

    // 10. Finally, rebuild the table using the filtered data
    buildTable(filteredData);
    
  };
  
  // 2. Attach an event to listen for changes to each filter
  d3.selectAll("input").on("change", updateFilters);
  
  // Build the table when the page loads
  buildTable(tableData);
