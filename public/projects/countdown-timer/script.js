// dom elements
const seconds = document.getElementById('seconds')
const minutes = document.getElementById('minutes')
const hours = document.getElementById('hours')
const day = document.getElementById('day')
const month = document.getElementById('month')
const year = document.getElementById('year')

const eventName = document.getElementById('event-name')
const showEvent = document.getElementById('event-heading')
const startCountdownBtn=document.getElementById('startCountdownBtn');

let date;
let time;

function countDownTimer() {
    date = document.getElementById('date')
    time = document.getElementById('time')
    
    
    // let event = new Date('7/7/2022');
    
    let event = new Date(`${date.value}`);
    // console.log(event.getTime() / 1000);
    
    if (isNaN(event.getTime()) || time.value == null || time.value == '') {
        errorShow();
    }
    else {
        setTimeout(() => {
            startCountdownBtn.style.display='none';
        }, 2000);

        startCountdownBtn.setAttribute('href','#count-down-timer');
        
        showEvent.innerText = `${eventName.value} Event starts in ...`;
        
        // console.log(`Event : ${event}`);
        // console.log(`Today : ${today}`);

        event.setMinutes((time.value).substring((time.value).length - 2));
        event.setHours((time.value).substring(0, 2));
        
        var timeObj;
        let today;
        
        let interval = setInterval(() => {
            today = new Date();
            timeObj = {
                seconds: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) % 60)),
                minutes: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) / 60 % 60)),
                hours: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) / (60 * 60) % 24)),
                day: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) / (60 * 60 * 24) % 30)),
                month: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) / (60 * 60 * 24 * 30) % 12)),
                year: Math.abs(Math.trunc(((event.getTime() / 1000) - (today.getTime() / 1000)) / (60 * 60 * 24 * 30 * 12)))
            }
            
            // enter data in dom elements
            if (timeObj.seconds < 10 && timeObj.seconds >= 0) {
                seconds.innerText = `0${timeObj.seconds}`
            }
            else {
                seconds.innerText = `${timeObj.seconds}`
            }
            if (timeObj.minutes < 10 && timeObj.seconds >= 0) {
                minutes.innerText = `0${timeObj.minutes}`
            }
            else {
                minutes.innerText = `${timeObj.minutes}`
            }
            if (timeObj.hours < 10 && timeObj.seconds >= 0) {
                hours.innerText = `0${timeObj.hours}`
            }
            else {
                hours.innerText = `${timeObj.hours}`
            }
            if (timeObj.day < 10 && timeObj.seconds >= 0) {
                day.innerText = `0${timeObj.day}`
            }
            else {
                day.innerText = `${timeObj.day}`
            }
            if (timeObj.month < 10 && timeObj.seconds >= 0) {
                month.innerText = `0${timeObj.month}`
            }
            else {
                month.innerText = `${timeObj.month}`
            }
            if (timeObj.year < 10 && timeObj.seconds >= 0) {
                year.innerText = `0${timeObj.year}`
            }
            else {
                year.innerText = `${timeObj.year}`
            }

            // console.log(timeObj);
            if (timeObj.seconds == 0 && timeObj.minutes == 0 && timeObj.hours == 0 && timeObj.day == 0 && timeObj.month == 0 && timeObj.year == 0) {
                clearInterval(interval)
            }

        }, 1000);
    }


}

function errorShow() {
    document.getElementById('error-disclaimer').style.opacity = '1';
    document.getElementById('error-disclaimer').style.top = '5%';
    setTimeout(function hideShowCopy() {
        document.getElementById('error-disclaimer').style.opacity = '0';
        document.getElementById('error-disclaimer').style.top = '0%';
    }, 2000);
}
