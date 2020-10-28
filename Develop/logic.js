//Wait to render until page is ready
$(document).ready(function() {

//Display current day at top of calendar
var now = moment().format('LL');

//console log confirmation
console.log(now);

//display current time
$("#currentDay").text(now);

// });

})

