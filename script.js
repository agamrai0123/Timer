var start = document.getElementById("start");
var reset = document.getElementById("reset");

var h = document.getElementById("hour-input");
var m = document.getElementById("min-input");
var s = document.getElementById("sec-input");

start.addEventListener("click", function(){
    let hour   = parseInt(h.value) || 0;
    let minute = parseInt(m.value) || 0;
    let second = parseInt(s.value) || 0;

    countdown(hour, minute, second);

    console.log(hour, minute, second);
});


reset.addEventListener("click", function(){
    h.value = null;
    m.value = null;
    s.value = null;

    console.log(h.value, m.value, s.value);
});

function toSec(hour, minute, second){
    let timeSec = (hour * 3600) + (minute * 60) + second;
    return timeSec;
}

function validate(hour, minute, second){
    if(hour > 23 || hour < 0 || minute > 99 || minute < 0 || second > 99 || second < 0 || toSec(hour, minute, second) > 86400){
        alert("Please Enter Valid Input");
        h.value = null;
        m.value = null;
        s.value = null;
    }
    return;
}

function countdown(hour, minute, second){
    validate(hour, minute, second);
    let time = toSec(hour,minute,second);
    console.log(time);
    for(let i = time; i > 0; i--){
        setTimeout(() => setTimer(time - i),i*1000);
    }

    return;
}

function setTimer(time){
    h.value = Math.floor(time / 3600);
    m.value = Math.floor((time % 3600) / 60);
    s.value = time % 60;
    if(time == 0){
        alert("Time Up!");
    }
}
