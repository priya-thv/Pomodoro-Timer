var time=25*60;
var timerinterval
var currmode="pomodoro";
var totalbreak=0;
var mode={
    pomodoro:25,
    short:5,
    long:15,
}
function start(){
    timerinterval=setInterval(updatetimer,1000);
}

function updatetimer(){
    var min=Math.floor(time/60);
    var sec=time%60;
    min=min<10? "0"+min :min;
    sec=sec<10? "0"+sec :sec;
    var timerElement = document.querySelector(".timer");
    timerElement.textContent=min + ":" +sec;
    if(time<=0){
        alert(" Time's up ")
        nextmode();
    }
    time=time-1;
}
document.querySelectorAll(".focus")
    .forEach(button=>{
        button.addEventListener('click',handlefocus);
    });

function handlefocus(evt){
    switchmode(evt.target.dataset.modeId)
}   

function switchmode(focus){
    currmode=focus;
    reset();

}

function reset(){
    time=mode[currmode]*60;
    clearInterval(timerinterval);
    updatetimer();
}

function pause(){
    clearInterval(timerinterval);
}

function nextmode(){
    if(currmode=="pomodoro"){
        totalbreak++;
        if(totalbreak%4==0){
            switchmode("long");
        }else{
            switchmode("short");
        }
    }
    else{
        switchmode("pomodoro");
    }
}