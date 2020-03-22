// from data.js
var tableData = data;


// YOUR CODE HERE!

//////////LEVEL 1////////////////

// function to populate the table with the data provided
function generateTable(table, data) {
    for (var i of data) {
      var row = table.insertRow();
      for (key in i) {
        var cell = row.insertCell();
        var text = document.createTextNode(i[key]);
        cell.appendChild(text);
      }
    }
  }
  
  var table = document.querySelector("table");
  var data = Object.keys(tableData[0]);

  // call the function
  generateTable(table, tableData);

  //bind target for on function targeting
  var button = d3.select("#filter-btn");

//   create handler function
  function datehandle(){
    //prevent page refresh
    d3.event.preventDefault();
    // variable creation for handler
    var table = document.getElementById("ufo-table");
    var tr = table.getElementsByTagName("tr");
    var input = document.getElementById("datetime");
    var filter = input.value.toUpperCase()
    for (i=0; i<tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
              } else {
                tr[i].style.display = "none";
              }
            }
          }
        // //clear input field
        //   document.getElementById("datetime").value = ""
    }


  // On function for target button
  button.on("click", datehandle)

//////////LEVEL 2////////////////
