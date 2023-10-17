var hourId = document.getElementById("hour")
var minId = document.getElementById("min")
var secId = document.getElementById("sec")
var msecId = document.getElementById("msec")
var hour = 0 ;
var min = 0 ;
var sec = 0 ;
var msec = 0;
var interval;

function timer() {
    msec++
    msecId.innerHTML = msec

    if (msec >= 100) {
        sec++
        secId.innerHTML = sec
        msec = 0;
    }
    else if (sec >= 60) {
        min++
        minId.innerHTML = min
        sec = 0;
    }
    if (min >= 60) {
        hour++
        hourId.innerHTML = hour
        min = 0;
    }
}
function start() {
    var start = document.getElementById("startBtn");
    interval = setInterval(timer, 10);
    start.disabled = true
}

function pause() {
    var start = document.getElementById("startBtn");
    clearInterval(interval)
    start.disabled = false
}
function reset() {
    var hour = 0;
    var min = 0;
    var sec = 0;
    var msec = 0;
    hourId.innerHTML = hour;
    minId.innerHTML = min;
    secId.innerHTML = sec;
    msecId.innerHTML = msec;
    pause()
}


