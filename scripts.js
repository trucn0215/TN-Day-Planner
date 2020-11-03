// adding moment js for today date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// timeBlock
var bussinessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Get the current hour of the day using moment.js
var currentHour = moment().format("A");

console.log(currentHour);
// loop over the hours from 9AM to 5PM.

//      var i = 9
//      Element id = "hour-" + i
//      Currently checking 9AM <currentHour
//      9am is in the past

//      Option A: Select matching element - $(Element id).CSS( "background");

//      Option B: Select matching element - $(Element id).CSS( "background");

// Add a click event ON A PARENT ELEMENT that can listen to my save buttons

// 