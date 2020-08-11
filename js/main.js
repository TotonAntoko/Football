var Sec = 1000;
var Min = Sec * 60;
var Clock = Min * 60;
var Day = Clock * 24;
var Week = Day * 7;
var Month = Week * 4;
var Year = Month * 12;
var diff = Year;

function updateETime() {

  function pad(num) {
    return num > 9 ? num : '0' + num;
  };


  days = Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours = Math.floor(diff / (1000 * 60 * 60)),
    mins = Math.floor(diff / (1000 * 60)),
    secs = Math.floor(diff / 1000),

    dd = days,
    hh = hours - days * 24,
    mm = mins - hours * 60,
    ss = secs - mins * 60;

  document.getElementById("date-countdown")
    .innerHTML =
    '<div class="countdown-block"> <h1 class="label">' + dd + ' </h1> Days </div>' +
    '<div class="countdown-block"> <h1 class="label">' + hh + ' </h1> Hours </div>' +
    '<div class="countdown-block"> <h1 class="label">' + mm + ' </h1> Minutes </div>' +
    '<div class="countdown-block"> <h1 class="label">' + ss + ' </h1> Seconds </div>';

  diff -= 1000;

}
setInterval(updateETime, 1000);