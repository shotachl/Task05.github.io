var secondsElement = document.querySelector('.seconds');
var minutesElement = document.querySelector('.minutes');
var hourElement = document.querySelector('.hour');
var dayElement = document.querySelector('.day');
var monthElement = document.querySelector('.month');
var yearElement = document.querySelector('.year');

function zeroPad(number) {
    if (number < 10) {
        return '0' + number;
    } else {
        return number.toString();
    }
}

function updateTime() {
    var now = new Date();
    var seconds = zeroPad(now.getSeconds());
    var minutes = zeroPad(now.getMinutes());
    var hours = zeroPad(now.getHours());

    var day = zeroPad(now.getDate());
    var month = zeroPad(now.getMonth() + 1);
    var year = now.getFullYear();

    secondsElement.textContent = seconds;
    minutesElement.textContent = minutes;
    hourElement.textContent = hours;

    dayElement.textContent = day;
    monthElement.textContent = month;
    yearElement.textContent = year;
}
setInterval(updateTime, 1000);

