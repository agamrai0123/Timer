var start = document.getElementById("start");
var reset = document.getElementById("reset");
var pause = document.getElementById("pause");

var h = document.getElementById("hour-input");
var m = document.getElementById("min-input");
var s = document.getElementById("sec-input");

var pauseCalled = false;
var resetCalled = false;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

start.addEventListener("click", function(){
    pauseCalled = false;
    let hour   = parseInt(h.value) || 0;
    let minute = parseInt(m.value) || 0;
    let second = parseInt(s.value) || 0;

    countdown(hour, minute, second);
    return;
    //console.log(hour, minute, second);
});

pause.addEventListener("click", function(){
    pauseCalled = true;
    return;
})

reset.addEventListener("click", function(){
    resetCalled = true;
    h.value = null;
    m.value = null;
    s.value = null
    console.log(h.value, m.value, s.value);
    return;
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

async function countdown(hour, minute, second){
    validate(hour, minute, second);
    let time = toSec(hour,minute,second);
    for(let i = time; i >= 0; i--){
        //setTimeout(() => setTimer(time - i),i*1000);
        setTimer(i);
        await sleep(1000);
        if(pauseCalled){
            break;
        }
    }
    return;
}

function setTimer(time){
    h.value = Math.floor(time / 3600);
    m.value = Math.floor((time % 3600) / 60);
    s.value = time % 60;
    console.log(h.value, m.value, s.value);
    if(time == 0){
        alert("Time Up!");
        //window.open("bit.ly/IqT6zt");
    }
    return;
}
