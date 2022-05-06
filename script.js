'use strict'
let date = new Date();


let day = date.getDate();
let year = date.getFullYear();


document.getElementById('month').textContent = date.toLocaleDateString('en-US', {month: "long"})
document.getElementById('weekDay').textContent = date.toLocaleDateString('en-US', {weekday: 'long'});
document.getElementById('day').textContent = day;
document.getElementById('year').textContent = year;