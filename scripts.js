var hourEl;
var textEl;
var saveEl;
var saveIcon;
var singleTimeBlock;

var timeBlock = $(".time-Block")
var textAreaHour = [];

// Get the current hour of the day using moment.js
var currentHour = parseInt(moment().format("H"));

// timeBlock
var bussinessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hoursID = [15, 16, 17, 18, 19, 20, 21, 22, 23];

// adding moment js for today date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Create time blocks for from 9AM to 5PM
function createTimeBlocks() {
    for (var i = 0; i < bussinessHours.length; i++) {
        singleTimeBlock = $("<div>").addClass("row");
        timeBlock.append(singleTimeBlock);
        hourEl = $("<div>").addClass("hour col text-right").text(bussinessHours[i]);
        textEl = $("<textarea>").addClass("description col-10").attr("id", hoursID[i]);
        saveEl = $("<button>").addClass("saveBtn col text-center");
        singleTimeBlock.append(hourEl, textEl, saveEl);

        // Add save icon to save buttons
        saveIcon = $("<i>").addClass("fa fa-save").css("font-size", "36px");
        saveEl.append(saveIcon);


        textAreaHour[i] = $("#" + hoursID[i]);
        console.log(textAreaHour[i].attr("data-index"))
    }
}

// check for the bussinessTime match with current time. If past current time, turn grey. if current, turn orange. If future, turn green.
function timeCheck (){
    for (var i=0; i < hoursID.length; i++){

        if (hoursID[i] < currentHour){
            textAreaHour[i].addClass("past")
        }
        else if (hoursID[i] == currentHour){
            textAreaHour[i].addClass("present")
        }
        else if (hoursID[i] > currentHour){
            textAreaHour[i].addClass("future")
        }
    }
}

createTimeBlocks();
timeCheck();