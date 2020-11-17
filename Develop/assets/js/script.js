// ----------------------------------------- Display the Current Date -----------------------------------------
var currentDate = moment().format('dddd, LL');
console.log(currentDate);
$("#currentDay").text(currentDate);