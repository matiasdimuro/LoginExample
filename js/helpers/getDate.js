const days = ["Monday", "Tuesday", "Wednesdey", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const dayNameElement = document.getElementById('day-name');
const monthElement = document.getElementById('month');
const dayNumElement = document.getElementById('day-num');
const yearElement = document.getElementById('year');
const hoursElement = document.getElementById('hours');
const minElement = document.getElementById('minutes');
const secElement = document.getElementById('seconds');

function updateDateHour() {

    const date = new Date();

    const dayName = days[date.getDay()];
    const month = months[date.getMonth()];
    const dayNum = date.getDate();
    const year = date.getFullYear();
    const hour = date.getHours();
    const min = date.getMinutes();
    const sec = date.getSeconds();

    (dayNameElement.textContent != dayName) && (dayNameElement.textContent = dayName);
    (monthElement.textContent != month) && (monthElement.textContent = month);
    (dayNumElement.textContent != dayNum) && (dayNumElement.textContent = dayNum);
    (yearElement.textContent != year) && (yearElement.textContent = year);
    (hoursElement.textContent != hour) && (hoursElement.textContent = hour);
    (minElement.textContent != min) && (minElement.textContent = min);
    (secElement.textContent != sec) && (secElement.textContent = sec);
}

export { updateDateHour };