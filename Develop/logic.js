//Wait to render until page is ready
$(document).ready(function() {
  initializeTime();
  getText();

//initialize page with stored notes
function initializeTime() {
  //Display current day at top of calendar
  var now = moment().format('LL');

  //console log confirmation
  console.log(now);

  //display current time
  $("#currentDay").text(now);
  
}

function getText() {
  var get9text = JSON.parse(localStorage.getItem("note9text"));
  console.log(get9text);
  $(".note9").append(get9text);

  var get10text = JSON.parse(localStorage.getItem("note10text"));
  console.log(get10text);
  $(".note10").append(get10text);

  var get11text = JSON.parse(localStorage.getItem("note11text"));
  console.log(get11text);
  $(".note11").append(get11text);

  var get12text = JSON.parse(localStorage.getItem("note12text"));
  console.log(get12text);
  $(".note12").append(get12text);

  var get1text = JSON.parse(localStorage.getItem("note1text"));
  console.log(get1text);
  $(".note1").append(get1text);

  var get2text = JSON.parse(localStorage.getItem("note2text"));
  console.log(get2text);
  $(".note2").append(get2text);

  var get3text = JSON.parse(localStorage.getItem("note3text"));
  console.log(get3text);
  $(".note3").append(get3text);

  var get4text = JSON.parse(localStorage.getItem("note4text"));
  console.log(get4text);
  $(".note4").append(get4text);
}


//function to color time blocks

  //if time block is past the current time given time now, color the timeblock grey

  //if time block is in the future, color the time block green

  //if time block is where time is now, color the time block red

//Function to save answers

//var of html 9am class

var note9 = document.querySelector('.note9');
var note10 = document.querySelector('.note10');
var note11 = document.querySelector('.note11');
var note12 = document.querySelector('.note12');
var note1 = document.querySelector('.note1');
var note2 = document.querySelector('.note2');
var note3 = document.querySelector('.note3');
var note4 = document.querySelector('.note4');


//var event listen save button click on 9am

$(".btnSubmit9").click(function() {

  //variable to store value of variable of html

  var note9text = note9.value.trim();

  //console log to check working properly
  console.log(note9text);

  //store notes in local storage
  localStorage.setItem("note9text", JSON.stringify(note9text))
})

$(".btnSubmit10").click(function() {

  //variable to store value of variable of html

  var note10text = note10.value.trim();

  //console log to check working properly
  console.log(note10text);

  //store notes in local storage
  localStorage.setItem("note10text", JSON.stringify(note10text))
})

$(".btnSubmit11").click(function() {

  //variable to store value of variable of html

  var note11text = note11.value.trim();

  //console log to check working properly
  console.log(note11text);

  //store notes in local storage
  localStorage.setItem("note11text", JSON.stringify(note11text))
})

$(".btnSubmit12").click(function() {

  //variable to store value of variable of html

  var note12text = note12.value.trim();

  //console log to check working properly
  console.log(note12text);

  //store notes in local storage
  localStorage.setItem("note12text", JSON.stringify(note12text))
})

$(".btnSubmit1").click(function() {

  //variable to store value of variable of html

  var note1text = note1.value.trim();

  //console log to check working properly
  console.log(note1text);

  //store notes in local storage
  localStorage.setItem("note1text", JSON.stringify(note1text))
})

$(".btnSubmit2").click(function() {

  //variable to store value of variable of html

  var note2text = note2.value.trim();

  //console log to check working properly
  console.log(note2text);

  //store notes in local storage
  localStorage.setItem("note2text", JSON.stringify(note2text))
})

$(".btnSubmit3").click(function() {

  //variable to store value of variable of html

  var note3text = note3.value.trim();

  //console log to check working properly
  console.log(note3text);

  //store notes in local storage
  localStorage.setItem("note3text", JSON.stringify(note3text))
})

$(".btnSubmit4").click(function() {

  //variable to store value of variable of html

  var note4text = note4.value.trim();

  //console log to check working properly
  console.log(note4text);

  //store notes in local storage
  localStorage.setItem("note4text", JSON.stringify(note4text))
})

// function init() {
//     var storedNotes = JSON.parse(localStorage.getItem("Hourly Notes"));

// }

//Function to display answers

});

