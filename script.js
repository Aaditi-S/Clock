var sample;


function showTime(){
    var date = new Date();
    var h = date.getHours();
    var m =date.getMinutes();
    var s =date.getSeconds();
    var session = "AM";
    if(h==0){
        h=12;
    }
    if(h > 12){
        session = "PM";
        h=h-12;
    }

    h = (h < 10) ? "0" +h : h;
    m = (m < 10) ? "0" +m : m;
    s = (s < 10) ? "0" +s : s;

    var time = h+ ":"+ m + ":" + s +" "+session;
    document.getElementById("digitalClock").innerHTML=time;
    sample=setTimeout(showTime , 1000);
}


const div = document.getElementById("showbtn");
const clk = document.getElementById("clock");
const stopwatch = document.getElementById("stopWatch");
const ul = document.getElementById("laps");


function show() {
    clearTimeout(sample);
    div.style.display="block";
    div.style.display="flex";
    clk.style.display="block";
    stopwatch.style.display="none";
    document.getElementById("digitalClock").innerHTML= "00:00:00";
}

function hide(){
    reset();
    resetlaps();
    showTime();
    stopwatch.style.display="block";
    div.style.display="none";
    clk.style.display="none";
}

var Sms=0 , Ss=0 , Sm=0;
var timer;


function start(){
    if(!timer){
        timer=setInterval(run , 10);
    }
}

function run(){
    document.getElementById("digitalClock").innerHTML= getTimer();
    Sms++;
    if(Sms == 100){
        Sms=0;
        Ss++;
    }
    if(Ss == 60){
        Ss=0;
        Sm++;
    }
}
function pause(){
    stopTimer();
}

function reset(){
    stopTimer();
    Sms=0;Ss=0;Sm=0;
    document.getElementById("digitalClock").innerHTML= getTimer();
}

function lap(){
    if(timer){
        var li=document.createElement('li');
        li.innerText=getTimer();
        ul.appendChild(li);
    }
}

function resetlaps(){
    ul.innerHTML='';
}

function getTimer (){
    return (Sm <10 ? "0"+Sm : Sm) +":"+(Ss <10 ? "0"+Ss : Ss) +":"+(Sms <10 ? "0"+Sms : Sms);
}

function stopTimer(){
    clearInterval(timer);
    timer=false;
}