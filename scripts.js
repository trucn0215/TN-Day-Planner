var hourEl;
var textEl;
var saveEl;
var saveIcon;
var singleTimeBlock;

var timeBlock = $(".time-Block");
var textAreaHour = [];

// adding moment js for today date in the header
var today = moment();
$("#currentDay").text(today.format("dddd, MMMM Do"));

// Get the current hour of the day using moment.js
var currentHour = parseInt(today.format("H"));

// timeBlock
var bussinessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hoursID = [9, 10, 11, 12, 13, 14, 15, 16, 17];

// Create time blocks for from 9AM to 5PM
function createTimeBlocks() {
    for (var i = 0; i < bussinessHours.length; i++) {
        singleTimeBlock = $("<div>").addClass("row");
        timeBlock.append(singleTimeBlock);
        hourEl = $("<div>").addClass("hour col text-right").text(bussinessHours[i]);
        textEl = $("<textarea>").addClass("description col-10").attr("id", hoursID[i]);
        saveEl = $("<button>").addClass("saveBtn col text-center").attr("data-index", i);
        singleTimeBlock.append(hourEl, textEl, saveEl);

        // Add save icon to save buttons
        saveIcon = $("<i>").addClass("fa fa-save").css("font-size", "36px");
        saveEl.append(saveIcon);

        textEl.attr('data-index', armyTime);
        saveEl.attr('data-hour', armyTime);
        saveIcon.attr('data-hour', armyTime);
        armyTime++;

        textAreaHour[i] = $("#" + hoursID[i]);
        console.log(textAreaHour[i].attr("data-index"))
    }
}

// check for the bussinessTime match with current time. If past current time, turn grey. if current, turn orange. If future, turn green.
function timeCheck() {
    for (var i = 0; i < hoursID.length; i++) {

        if (hoursID[i] < currentHour) {
            textAreaHour[i].addClass("past")
        }
        else if (hoursID[i] == currentHour) {
            textAreaHour[i].addClass("present")
        }
        else if (hoursID[i] > currentHour) {
            textAreaHour[i].addClass("future")
        }
    }
}

function saveInfo(event) {
    event.preventDefault();

    var string = $(event.target).parent().children().eq(1).val();
    var textareaId = $(event.target).parent().children().eq(1).attr('id');

    //grab button id and value and send it to local storage
    if (textareaId === undefined && string === undefined) {//when they click the icon send them one branch up to get the values

        string = $(event.target).parent().parent().children().eq(1).val();
        textareaId = $(event.target).parent().parent().children().eq(1).attr('id');
    }

    //call function to save data to local storage
    setData(string, textareaId);
    //console.log(textAreaValue);
}

// save data to localStorage
function getJsonData() {
    return JSON.parse(localStorage.getItem("textValue"));
}

var textAreaValue = [];
var armyTime = 9;

//set data to JSON
function setData(string, ID) {
    textAreaValue = getJsonData();
    textAreaValue.push({ textareaId: ID, savedText: string });

    localStorage.setItem("textValue", JSON.stringify(textAreaValue));
}

function renderData() {
    var arrayJSON = getJsonData();

    if (!arrayJSON) {
        return;
    }
    for (var i = 0; i < arrayJSON.length; i++) {
        $('#' + arrayJSON[i].textareaId).text(arrayJSON[i].savedText);
    }
}

console.log(setData())

createTimeBlocks();
timeCheck();
renderData();
timeBlock.on('click', '.saveBtn', saveInfo);