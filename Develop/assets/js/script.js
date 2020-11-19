

// ----------------------------------------- Display the Current Date -----------------------------------------
var currentDate = moment().format('dddd, LL');
console.log(currentDate);
$("#currentDay").text(currentDate);

// ----------------------------------------- Color change Time -----------------------------------------
//
var auditEntry = function() {
    //var time = moment().hour(); // this will gove only the hour of the time in 24hr format
    var time = 10; //this is for testing only
    console.log(time);

    var idVal = [];

    var content = $("div.row > textarea");//.attr('id');
    // console.log(content);

    content.each(function() {
    //$("div.row > textarea").each(function() {
        idVal.push($(this).attr("id"));
        var check = $(this).attr("id");
        //debugger;
        //console.log("check" + check);
        if (check < time){
            console.log(check + "earlier");
            $(this).addClass("past");
        }
        if (check == time){
            console.log(check + "current");
            $(this).addClass("present");
        }
        if (check > time){
            console.log(check + "later");
            $(this).addClass("future");
        }
        // else if (check == time){
        //     console.log(check + "current");
        //     $(this).addClass("present");
        // }
    });
    console.log(idVal);
}

// ----------------------------------------- Edit Time Entry Text -----------------------------------------
//textarea







auditEntry();


// ----------------------------------------- Timer -----------------------------------------
//
// setInterval(function () {
//     auditEntry();
// },5000); //(1000 * 60) * 30); //execute every 30 minutes.  1000ms*60seconds*30 minutes