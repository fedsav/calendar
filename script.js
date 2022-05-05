'use strict'
let date = new Date();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Friday', 'Saturday'];


let monthDate = date.getMonth();
let weekDayDate = date.getDay();
let day = date.getDate();
let year = date.getFullYear();


let month = months[monthDate];
let weekDay = weekDays[weekDayDate];


document.getElementById('month').textContent = month;
document.getElementById('weekDay').textContent = weekDay;
document.getElementById('day').textContent = day;
document.getElementById('year').textContent = year;