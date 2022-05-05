'use strict'
let date = new Date();
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Wednesday', 'Friday', 'Saturday'];


let month = date.getMonth();
let weekDay = date.getDay();
let day = date.getDate();
let year = date.getFullYear();


document.getElementById('month').textContent = months[month];
document.getElementById('weekDay').textContent = weekDays[weekDay];
document.getElementById('day').textContent = day;
document.getElementById('year').textContent = year;