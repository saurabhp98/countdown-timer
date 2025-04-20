//new year eve date
const newYears = '1 jan 2026';
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');
//countdown function
function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();
    const totalSeconds = Math.floor((newYearsDate - currentDate)/1000);
    const days = Math.floor(totalSeconds/60/60/24);
    const hours = Math.floor(totalSeconds /60/60%24);
    const minutes = Math.floor(totalSeconds/60%60);
    const sec = Math.floor(totalSeconds%60);
    

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(sec);
    console.log(days, hours, minutes, sec);
}

//to adding the zero to the time if time gets lower than 2 digit
function formatTime(time){
    if (time<10 && time >-1 ) {
        time = `0${time}`;
    } 
    else {
        time;
    }

    if (time < 0) {
        time = `00`;
    }
    
    return time;
}
//initial call
countdown();
//calling function after every 1 sec.
setInterval(countdown, 1000);

