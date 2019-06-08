// #STUDENT: RAFAEL SANTOS         #HOME WORK 14
// #Data Analystics and Visualization Cohort 3


// from data.js
var tableData = data;

// Fill the html table with data

var tbody = d3.select("tbody");

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });


// Select the filter button
var FilterTableBtn = d3.select("#filter-btn");


// Once the button is clicked, filter data and update the table
FilterTableBtn.on("click", function() {

   // Prevent the page from refreshing
   d3.event.preventDefault();

   // Select the input element
   var inputElement = d3.select("#datetime");

   // Get the value property of the input element
   var inputValue = inputElement.property("value");
   console.log(inputValue); // monitor result

   // Filter the data based on the value input
   var filteredData = data.filter(FilterDate => FilterDate.datetime === inputValue);
   console.log(filteredData); // monitor result
    
   // Delete rows from the table 
   var table = document.getElementById("ufo-table");
    
     for(var i = table.rows.length - 1; i > 0; i--)
        {
        table.deleteRow(i);
        }
   
   // Update table with the filtered data
   var tbody = d3.select("tbody");
    
   filteredData.forEach((ufoReportFiltered) => {
        var row = tbody.append("tr");
        Object.entries(ufoReportFiltered).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
   });

});

