var hourEl;
var textEl;
var saveEl;
var saveIcon;
var singleTimeBlock;

var timeBlock = $(".time-Block")

// adding moment js for today date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Get the current hour of the day using moment.js
var currentHour = parseInt(moment().format("k"));

// timeBlock
var bussinessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

// Create time blocks for from 9AM to 5PM
function createTimeBlocks (){
    for (var i=0; i < bussinessHours.length; i++){
        singleTimeBlock = $("<div>").addClass("row");
        timeBlock.append(singleTimeBlock);
        hourEl = $("<div>").addClass("hour col text-right").text(bussinessHours[i]);
        textEl = $("<textarea>").addClass("description col-10");
        saveEl = $("<button>").addClass("saveBtn col text-center");
        singleTimeBlock.append(hourEl, textEl, saveEl);

        // Add save icon to save buttons
        saveIcon = $("<i>").addClass("fa fa-save").css("font-size","36px");
        saveEl.append(saveIcon);
    }

    // if (bussinessHours.length == currentHour){
    //     textEl.addClass("present")
    // }
    // else if (bussinessHours.length < currentHour){
    //     textEl.addClass("past")
    // }
    // else if (bussinessHours.length > currentHour){
    //     textEl.addClass("future")
    // }
// console.log(bussinessHours.length)

}
// compare = bussinessHours[1] >= currentHour;
// console.log(currentHour)
// console.log(bussinessHours[i])
// console.log(compare)

// function timeCheck (){
//     for (var i=0; i<bussinessHours.length+1;i++){
//         if (bussinessHours[i] = currentHour){
//             textEl.addClass("present")
//         }
//         else if (bussinessHours[i] < currentHour){
//             textEl.addClass("past")
//         }
//         else {
//             textEl.addClass("future")
//         }
//     }
// }

createTimeBlocks();
// timeCheck();
// loop over the hours from 9AM to 5PM.

//      var i = 9
//      Element id = "hour-" + i
//      Currently checking 9AM <currentHour
//      9am is in the past

//      Option A: Select matching element - $(Element id).CSS( "background");

//      Option B: Select matching element - $(Element id).CSS( "background");

// Add a click event ON A PARENT ELEMENT that can listen to my save buttons

// class="hour col text-right"
// class="description col-10"
// class="saveBtn col text-center"