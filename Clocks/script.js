let getEl = x => document.querySelector(x);
//date & clock
setInterval(() => {
    let time = new Date;
    let day = time.getDate();
    let month = time.getMonth();
    let year = time.getFullYear();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    if (day<10) day = '0' + day;
    if (month<10) month = '0' + month;
    if (hour<10) hour = '0' + hour;
    if (minute<10) minute = '0' + minute;
    if (second<10) second = '0' + second;
    getEl('#date').innerHTML = `${day} . ${month} . ${year}`
    getEl('#clock').innerHTML = `${hour}:${minute}:${second}`;
}) 
//stopwatch let
let hh = 0; 
let mm = 0;
let ss = 0;
let ms = 0;
//timer let
let min = 0;
let sec = 0;
function correctView() {
    if (hh.toString().length == 1) hh = '0' + parseInt(hh);
    if (mm.toString().length == 1) mm = '0' + parseInt(mm);
    if (ss.toString().length == 1) ss = '0' + parseInt(ss);
    if (ms.toString().length == 1) ms = '00' + parseInt(ms);
    if (ms.toString().length == 2) ms = '0' + parseInt(ms);
    if (min.toString().length == 1) min = '0' + parseInt(min);
    if (sec.toString().length == 1) sec = '0' + parseInt(sec);
}
correctView();
//stopwatch
getEl('#stopwatch-value').innerHTML = `${hh}:${mm}:${ss}:${ms}`;
let stopwatchOn;
getEl('#stopwatch-start').addEventListener('click', function() {
    this.disabled = true;
    stopwatchOn = setInterval(() => {
        ms = parseInt(ms);
        ms+=10;
        if (ms > 999) {
            ms = 0;
            ss = parseInt(ss);
            ss+=1;
            ss = parseInt(ss);
        }
        if (ss == 60) {
            ss = 0;
            ss = parseInt(ss);
            mm = parseInt(mm);
            mm+=1;
            mm = parseInt(mm);
        }
        if (mm == 60) {
            mm = 0;
            hh = parseInt(hh);
            hh+=1;
            hh = parseInt(hh);
        }
        correctView();
        getEl('#stopwatch-value').innerHTML = `${hh}:${mm}:${ss}:${ms}`;
    }, 10)
})
getEl('#stopwatch-stop').addEventListener('click', function() {
    getEl('#stopwatch-start').disabled = false;
    clearInterval(stopwatchOn);
})
getEl('#stopwatch-reset').addEventListener('click', function() {
    getEl('#stopwatch-start').disabled = false;
    hh = 0;
    mm = 0;
    ss = 0;
    ms = 0;
    correctView();
    getEl('#stopwatch-value').innerHTML = `${hh}:${mm}:${ss}:${ms}`;
    getEl('#loop-value').innerHTML = '';
})
getEl('#stopwatch-loop').addEventListener('click', function() {
    let p = document.createElement('p');
    p.innerHTML = `${getEl('#stopwatch-value').innerHTML}`;
    getEl('#loop-value').appendChild(p);
})
//timer
let timerNum = parseInt(`${getEl('#timer-number').innerHTML}`);
getEl('#plus').addEventListener('click', function(){
    if (timerNum>=0) {
        timerNum +=1;
        if (timerNum<10) {
            getEl('#timer-number').innerHTML = `0${timerNum}`;
        }
        else {
            getEl('#timer-number').innerHTML = `${timerNum}`;
        }
    }
})
getEl('#minus').addEventListener('click', function(){
    if (timerNum>0) {
        timerNum -=1;
        if (timerNum<10) {
            getEl('#timer-number').innerHTML = `0${timerNum}`;
        }
        else {
            getEl('#timer-number').innerHTML = `${timerNum}`;
        }
    }
})
let timer;
getEl('#timer-start').addEventListener('click', function() {
    min = timerNum;
    sec = 0;
    this.disabled = true;
    timer = setInterval(() => {
        sec-=1;
        if (sec < 0) sec = 59;
        if (sec==59) min -=1;
        correctView();
        getEl('#timer-value').innerHTML = `${min}:${sec}`;
    }, 1000)
});
getEl('#timer-stop').addEventListener('click', function() {
    clearInterval(timer);
    getEl('#timer-start').disabled = false;
});
getEl('#timer-reset').addEventListener('click', function() {
    clearInterval(timer);
    min = 0;
    sec = 0;
    correctView();
    getEl('#timer-value').innerHTML = `${min}:${sec}`;
    getEl('#timer-start').disabled = false;
})


