// from data.js
var tableData = data;

// YOUR CODE HERE!
console.log(tableData);

//Using the UFO dataset provided in the form of an array of JavaScript objects,
// write code that appends a table to your web page and then adds new rows of data for 
//each UFO sighting.

var tbody = d3.select("tbody");

tableData.forEach((sightings) => {
console.log(tableData);

//var city = [];
//var state = [];
//var country = [];
//var shape = [];
//var durationMinutes = [];
//var comments = [];

// Data Names List for later reference from Data
//datetime: "1/1/2010",
   // city: "benton",
   // state: "ar",
    //country: "us",
   // shape: "circle",
    //durationMinutes: "5 mins.",
   // comments: 
   //console.log(tableData.datetime);
   //console.log(tableData.city);
   //console.log(tableData.state);
   //console.log(tableData.country);
   //console.log(tableData.shape);
   //console.log(tableData.durationMinutes);
   //console.log(tableData.comments);

   // Loop th/*rough array of objects then each object
   // tableData.forEach((sightings) => {
    //console.log(tableData);
  
    // Get the entries for each object in the array
   // Object.entries(tableData).forEach(([key, value]) => {
      // Log the key and value
    //  console.log(`Key: ${key} and Value ${value}`);
     
  //  });
 // });


//Make sure you have a column for date/time, city, state, country, shape, and comment 
//at the very least.


//Use a date form in your HTML document and write JavaScript code that will listen
// for events and search through the date/time column to find rows that match user input.