//Wait to render until page is ready
$(document).ready(function() {

//Display current day at top of calendar
var now = moment().format('LL');

//console log confirmation
console.log(now);

//display current time
$("#currentDay").text(now);

//function to color time blocks

  //if time block is past the current time given time now, color the timeblock grey

  //if time block is in the future, color the time block green

  //if time block is where time is now, color the time block red

//Function to save answers

//Function to display answers

});

