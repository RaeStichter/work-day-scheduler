// ----------------------------------------- Display the Current Date -----------------------------------------
var currentDate = moment().format('dddd, LL'); // Friday, November 20, 2020 example format
$("#currentDay").text(currentDate); // set id to the current date to display in HTML

// ----------------------------------------- Color change Time -----------------------------------------
// change the color of the row/time elements based on whether they are in the past, present or future.
var auditEntry = function() {
    //var time = moment().hour(); // this will gove only the hour of the time in 24hr format
    var time = 12; //this is for testing only
   
    // get all of the child text areas of the parent div
    var rowInfo = $("div.row > textarea");

    rowInfo.each(function() { // for each of the text areas
        // get the id and set to check
        var check = $(this).attr("id");

        // if check is less than the actual time, this is in the past
        if (check < time){
            $(this).addClass("past");
        }
        // if check is equal to the actual time, this is in the present
        if (check == time){
            $(this).addClass("present");
        }
        // if check is greater than the actual time, this is in the future
        if (check > time){
            $(this).addClass("future");
        }
    });
};

// ----------------------------------------- Load Time Entry Text -----------------------------------------
// pull timeEntry array from local storage and pass along.
var loadTimeEntry = function() {
    // get array from local storage
    timeEntry = JSON.parse(localStorage.getItem("timeEntry"));

    //if there is nothing in local storage, create a new object to track the time entry data
    if (!timeEntry) {
           timeEntry = {
            9: [],
            10: [],
            11: [],
            12: [],
            13: [],
            14: [],
            15: [],
            16: [],
            17: []
        };        
    };

    // if there are values in timeEntry, pass them to populateEntry to repopulate values.
    populateEntry(timeEntry);
};

// ----------------------------------------- Populate Loaded Values -----------------------------------------
// take the loaded timeEntry and repopulate the time slots
var populateEntry = function(timeEntry) {
    // loop through the time slots to populate them
    
    // get all of the child text areas of the parent div
    var rowInfo = $("div.row > textarea");
    
    // i corresponds to the timeslot and the arrray index that the text values were saved to
    for (i = 9; i < 18; i++) {
        // Check that the i value provides the correct information (leave commented out)
        // var check = $(this).attr(i);
        // console.log(check);

        // set the id so that it can be called as an id, ie #9
        var id = ("#" + i);

        // set up the text that will be added based on the id
        var textToAdd = timeEntry[i];
        //console.log(textToAdd, i); // for troubleshooting (leave commented out)

        // set the text to be added to the id
        var textEntry = $(id).text(textToAdd)
        //console.log(pleaseWork);

        // append the textEntry to the rowInfo
        rowInfo.append(textEntry);
    };
};

// ----------------------------------------- Edit Time Entry Text -----------------------------------------
//used for troubleshooting
// $(".textarea").on("click", function() {
//     var text = $.trim($(this).val());
//     console.log(text);
//     var idText = $(this).attr("id");
//     console.log(idText);
// })

// ----------------------------------------- Save Time Entry Text -----------------------------------------
var saveTimeEntry = function(text, idText) {
    // update the timeEntry array with the information to be saved
    timeEntry[idText] = text;
    
    console.log("Event Saved");

    //push the string version of the array to local storage
    localStorage.setItem("timeEntry", JSON.stringify(timeEntry));
};

// ----------------------------------------- Save buttons -----------------------------------------
$(".saveBtn").click(function() {
    // get the id of the button that was pressed
    var timeTextId = $(this).prev().attr("id");

    // get the text of the textarea associated with the button that was pressed
    var timeTextData = $(this).prev().val();
    
    // pass the variables to the save time entry function
    saveTimeEntry(timeTextData, timeTextId);
})

// ----------------------------------------- Functions to call at load -----------------------------------------

auditEntry(); // set time colors
loadTimeEntry(); // pull and set saved info from localstorage


// ----------------------------------------- Timer -----------------------------------------
// if no refresh occurs by the user, refresh every 15 minuites.

setInterval(function () {
    auditEntry();
},(1000 * 60) * 50); //execute every 30 minutes.  1000ms*60seconds*15 minutes