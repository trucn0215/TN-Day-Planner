var hourEl;
var textEl;
var saveEl;
var saveIcon;
var singleTimeBlock;

var timeBlock = $(".time-Block");
var textAreaHour = [];
var armyTime = 9;

// Get the current hour of the day using moment.js
var currentHour = parseInt(moment().format("H"));

// timeBlock
var bussinessHours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hoursID = [9, 10, 11, 12, 13, 14, 15, 16, 17];

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
    event.stopPropagation();

    var string = $(event.target).parent().children().eq(1).val();
    var textareaId = $(event.target).parent().children().eq(1).attr('id');

    //grab button id and value and send it to local storage
    if (textareaId === undefined && string === undefined) {//when they click the icon send them one branch up to get the values

        string = $(event.target).parent().parent().children().eq(1).val();
        textareaId = $(event.target).parent().parent().children().eq(1).attr('id');
    }
    if (string == "") {//check if user is saving anything
        return;
    }
    //call function to save data to local storage
    setData(string, textareaId);
    //console.log(textAreaValue);
}

var textAreaValue = [];

//set data to JSON
function setData(string, iD) {
    if (localStorage.getItem('textValue') !== null) {
        textAreaValue = getJsonData();
    }
    textAreaValue.push({ textareaId: iD, savedText: string });

    localStorage.setItem("textValue", JSON.stringify(textAreaValue));
}

function renderData() {
    //this function render the data back to the browser that once store during session 
    //by getting the data from Local storage and setting the value to an array after 
    //loops around finds matching text box by using queryselector and inputs the data 
    var arrayJSON = getJsonData();
    //console.log('JSON: ' + arrayJSON);
    if (!arrayJSON) {
        return;//return if JSON array is empty
    }
    for (var i = 0; i < arrayJSON.length; i++) {
        $('#' + arrayJSON[i].textareaId).text(arrayJSON[i].savedText);//target text area by id
    }
}

///gets Json data 
function getJsonData() {
    return JSON.parse(localStorage.getItem("textValue"));
}

createTimeBlocks();
timeCheck();
renderData();
timeBlock.on('click', '.saveBtn', saveInfo);