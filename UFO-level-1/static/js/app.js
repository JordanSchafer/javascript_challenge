// from data.js
var tableData = data;
console.log(tableData);

//Get a reference to the table body  
var tbody=d3.select("tbody");

//UFO sighting value from the data
tableData.forEach((ufo) =>{

    //append a new row to the the table
    var row = tbody.append("tr");

    Object.entries(ufo).forEach(([key,value]) =>{
        //add a new cell for each value
        var cell = row.append("td");
        cell.text(value);
    });
});

//Runs a filter function when the button is clicked
var button = d3.select("#filter-btn")
button.on("click", runEnter);

//Runs a filter function when enter is hit in the form
var form = d3.select("#form");
form.on("submit",runEnter);


function runEnter(){
    //prevents the page from refereshing
    d3.event.preventDefault();
    //clears the current table
    tbody.html("");

    //Reference to the element for the input form
    var inputElement = d3.select("#datetime");

    //gets the value from the input form
    var inputValue = inputElement.property("value");

    //filters the data based on the inputted value
    var filterData = tableData.filter(ufo => ufo.datetime===inputValue);
    console.log(filterData);

    //Creates a table to display the filtered data
    filterData.forEach((ufo) =>{

        var row = tbody.append("tr");
    
        Object.entries(ufo).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}