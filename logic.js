//Wait to render until page is ready
$(document).ready(function() {

//vars to get timeblock classes
var note9 = document.querySelector('.note9');
var note10 = document.querySelector('.note10');
var note11 = document.querySelector('.note11');
var note12 = document.querySelector('.note12');
var note1 = document.querySelector('.note1');
var note2 = document.querySelector('.note2');
var note3 = document.querySelector('.note3');
var note4 = document.querySelector('.note4');
  
//Run function to initialize time and get local storage text upon document load

initializeTime();
// colorTimeblock();
getText();

//initialize time and color timeblocks
function initializeTime() {
  //Display current day at top of calendar
  var now = moment().format('LL');

  //display current time
  $("#currentDay").text(now);
  
  //for each form-control class that's found, run the function of to parse the integer out of the div ID, create a variable of current time, and if timeblock time is < or =, add or remove classes accordingly. 
  
  $(".form-control").each(function () {
        var timeBlocktime = parseInt($(this).attr("id"));
        now = moment().format('H');
        if (now > timeBlocktime) {
            $(this).addClass("past");
        } else if (now < timeBlocktime) {
            $(this).addClass("future");
            $(this).removeClass("past");
        } else {
            $(this).addClass("present");
            $(this).removeClass("past");
            $(this).removeClass("future");
        }
    });

  };

// function that gets localstorage text, console logs it, then write it to the timeblock
function getText() {
  var get9text = JSON.parse(localStorage.getItem("note9text"));
  $(".note9").append(get9text);

  var get10text = JSON.parse(localStorage.getItem("note10text"));
  $(".note10").append(get10text);

  var get11text = JSON.parse(localStorage.getItem("note11text"));
  $(".note11").append(get11text);

  var get12text = JSON.parse(localStorage.getItem("note12text"));
  $(".note12").append(get12text);

  var get1text = JSON.parse(localStorage.getItem("note1text"));
  $(".note1").append(get1text);

  var get2text = JSON.parse(localStorage.getItem("note2text"));
  $(".note2").append(get2text);

  var get3text = JSON.parse(localStorage.getItem("note3text"));
  $(".note3").append(get3text);

  var get4text = JSON.parse(localStorage.getItem("note4text"));
  $(".note4").append(get4text);
}

//var event listen save notes in local storage on button click for each time block

$(".btnSubmit9").click(function() {
  var note9text = note9.value.trim();
  localStorage.setItem("note9text", JSON.stringify(note9text))
})

$(".btnSubmit10").click(function() {
  var note10text = note10.value.trim();
  localStorage.setItem("note10text", JSON.stringify(note10text))
})

$(".btnSubmit11").click(function() {
  var note11text = note11.value.trim();
  localStorage.setItem("note11text", JSON.stringify(note11text))
})

$(".btnSubmit12").click(function() {
  var note12text = note12.value.trim();
  localStorage.setItem("note12text", JSON.stringify(note12text))
})

$(".btnSubmit1").click(function() {
  var note1text = note1.value.trim();
  localStorage.setItem("note1text", JSON.stringify(note1text))
})

$(".btnSubmit2").click(function() {
  var note2text = note2.value.trim();
  localStorage.setItem("note2text", JSON.stringify(note2text))
})

$(".btnSubmit3").click(function() {
  var note3text = note3.value.trim();
  localStorage.setItem("note3text", JSON.stringify(note3text))
})

$(".btnSubmit4").click(function() {
  var note4text = note4.value.trim();
  localStorage.setItem("note4text", JSON.stringify(note4text))
});
});

