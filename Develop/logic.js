//Wait to render until page is ready
$(document).ready(function() {

//initialize page with stored notes
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

$(".btnSubmit9").click(function() {
  var note9 = $(".note9").value(".note9");
  console.log(note9);
})

// function init() {
//     var storedNotes = JSON.parse(localStorage.getItem("Hourly Notes"));

// }

//Function to display answers

});

