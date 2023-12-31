const body = document.body;
const endTime = new Date('Decembre 31 2023 12:39:00');
const daysE1 = document.getElementById('days');
const hoursE1 = document.getElementById('hours');
const minutesE1 = document.getElementById ('minutes');
const secondsE1 = document.getElementById('seconds');

setInterval(updateCountdown, 1000);

function updateCountdown() {
    const startTime = new Date();
    const diff = endTime - startTime; 
    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(diff / 1000 / 60) % 60;
    const seconds = Math.floor(diff / 1000) % 60;
    daysE1.innerHTML = days;
    hoursE1.innerHTML = hours < 10 ? '0'+hours : hours;
    minutesE1.innerHTML = minutes < 10 ? '0'+minutes : minutes;
    secondsE1.innerHTML = seconds , 10 ? '0'+seconds : seconds;

    if (diff <= 0) {
       showModal();
    }
}


function showModal() {
    const modal = document.getElementById('myModal');
    modal.style.display = 'block';
}

