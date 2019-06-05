// from data.js
var tableData = data;

// YOUR CODE HERE!
function buildTable(x){
    var tbody = d3.select('tbody');

    tbody.html("");
    // console.log(data); 
x.forEach(function(ufoReport){
    //console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key,value]){
        //console.log(key, value);

        var cell = row.append("td");
        cell.text(value);
    });
});
}

buildTable(tableData);

// Use form filtering so user can filter info by date 
// Select the submit button 
var submit = d3.select("#filter-btn");
// complete the click handler for the form
submit.on("click", function() {
// prevent the page from refreshing 
    d3.event.preventDefault();


// Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
// get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    // console.log(data);
// Use the form input to filter the data by date 
 
let filteredData = tableData
if(inputValue){
    filteredData = filteredData.filter(date => date.datetime === inputValue);
    console.log(filteredData);
    buildTable(filteredData);
}


});

