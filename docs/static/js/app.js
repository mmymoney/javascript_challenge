// from data.js
var tableData = data;
var tbody = d3.select("tbody");

// YOUR CODE HERE!

//////////LEVEL 1////////////////
  function generateTable(data) {
    // First, clear out any existing data
    tbody.html("");
    // Next, loop through each object in the data
    data.forEach((dataRow)=>{
      var row = tbody.append("tr");
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
      Object.values(dataRow).forEach((val)=>{
        var cell = row.append("td");
        cell.text(val)
      });
    });
  };
    // and append a row and cells for each value in the row
      // Append a row to the table body

///////////////////////////////////

// Keep Track of all filters
var filters = {};
function updateFilters() {
  // Save the element, value, and id of the filter that was changed
  var changed_element = d3.select(this).select("input")
  var element_value = changed_element.property("value")
  var filter_id = changed_element.attr("id")
  // If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object
  if(element_value) {
    filters[filter_id] = element_value
  } 
  else {
    delete filters[filter_id]
  }
  // Call function to apply all filters and rebuild the table
  filterTable();
}
function filterTable() {
  // Set the filteredData to the tableData
  let filteredData = tableData;
  // Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([key, value]) => {
    filteredData = filteredData.filter(row => row[key] === value);
  });
  // Finally, rebuild the table using the filtered Data
  generateTable(filteredData);
};

// Attach an event to listen for changes to each filter
d3.selectAll(".filter").on("change", updateFilters);
// Build the table when the page loads
generateTable(tableData);

console.log(filters)