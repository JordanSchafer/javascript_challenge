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

//clears and updates places holder for the form field
var selection = d3.select("#selection");
selection.on("change",changeFilter);

function runEnter(){
    //prevents the page from refereshing
    d3.event.preventDefault();
     //clears the current table
    tbody.html("");
    
    //Reference to the element for the input form
    var inputElement = d3.select("#input");
    
    //gets the value from the input form
    var inputValue = inputElement.property("value");

    //filters the data based on the inputted value and dropdown picked
    var filterData=[]
    if(selection.property("value")=="Date"){
        filterData = tableData.filter(ufo => ufo.datetime===inputValue);
    }
    else if(selection.property("value")=="City"){
        filterData = tableData.filter(ufo => ufo.city===inputValue);
    }
    else if(selection.property("value")=="State"){
        filterData = tableData.filter(ufo => ufo.state===inputValue);
    }
    else if(selection.property("value")=="Country"){
        filterData = tableData.filter(ufo => ufo.country===inputValue);
    }
    else if(selection.property("value")=="Shape"){
        filterData = tableData.filter(ufo => ufo.shape===inputValue);
    }
    
    //Creates a table to display the filtered data
    console.log(filterData);
    filterData.forEach((ufo) =>{

        var row = tbody.append("tr");
    
        Object.entries(ufo).forEach(([key,value]) =>{
            var cell = row.append("td");
            cell.text(value);
        });
    });
}

function changeFilter(){
    //prevents the page from refereshing
    d3.event.preventDefault();
    //console.log(selection.property("value"));

    //clears and updates placeholder based on selection of dropdown
    if(selection.property("value")=="Date"){
        document.getElementById("input").value=""
        document.getElementById("input").placeholder = "1/1/2010";
    }
    else if(selection.property("value")=="City"){
        document.getElementById("input").value=""
        document.getElementById("input").placeholder = "fresno";
    }
    else if(selection.property("value")=="State"){
        document.getElementById("input").value=""
        document.getElementById("input").placeholder = "or";
    }
    else if(selection.property("value")=="Country"){
        document.getElementById("input").value=""
        document.getElementById("input").placeholder = "us";
    }
    else if(selection.property("value")=="Shape"){
        document.getElementById("input").value=""
        document.getElementById("input").placeholder = "circle";
    }
}