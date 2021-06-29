// define variables
var timerMilliseconds = 00;
var timerSeconds = 00;
var timerMinutes = 00;

// define elements
var timerMillisecondsEl = document.getElementById("timer-milliseconds");
var timerSecondsEl = document.getElementById("timer-seconds");
var timerMinutesEl = document.getElementById("timer-minutes");

var timerStartEl = document.getElementById("timer-start");
var timerStopEl = document.getElementById("timer-stop")
var timerResetEl = document.getElementById("timer-reset");

// timer interval
var timerInterval;

// add 0 to single digit
function pad(num) {
    return (num <= 9) ? '0' + parseInt(num) : num;
}

// timer function
function startTimer() {
    // add +1 ms
    timerMilliseconds++;

    // increase seconds
    if(timerMilliseconds > 99) {
        // reset milliseconds
        timerMilliseconds = 0;

        // add +1 to seconds
        timerSeconds++;
    }

    // increase minutes
    if(timerSeconds == 60) {
        // reset seconds
        timerSeconds = 0;

        // add +1 to minutes
        timerMinutes++;
    }

    // print ms
    timerMillisecondsEl.innerHTML = pad(timerMilliseconds);

    // print sec
    timerSecondsEl.innerHTML = pad(timerSeconds);

    // print minutes
    timerMinutesEl.innerHTML = pad(timerMinutes);
}

// listen timer start
timerStartEl.onclick = function() {
    // start interval
    timerInterval = setInterval(startTimer, 10);
}

// listen timer stop
timerStopEl.onclick = function() {
    // clear interval
    clearInterval(timerInterval);
}

// listen timer reset
timerResetEl.onclick = function() {
    // clear interval
    clearInterval(timerInterval);

    // reset times
    timerMilliseconds = "00";
    timerSeconds = "00";
    timerMinutes = "00";

    // reset display
    timerMillisecondsEl.innerHTML = timerMilliseconds;
    timerSecondsEl.innerHTML = timerSeconds;
    timerMinutesEl.innerHTML = timerMinutes;
}









