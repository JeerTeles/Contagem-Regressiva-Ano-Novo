const body = document.body;
const endTime = new Date('Decembre 31 2023 13:24:00');
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

    if (!player) {
        player = new YT.Player('myVideo', {
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }
}

function onPlayerReady(event) {
    // Iniciar a reprodução do vídeo e configurar o loop
    event.target.playVideo();
    event.target.setLoop(true);
}

function onPlayerStateChange(event) {
    // Reiniciar o vídeo quando atingir o fim (estado 0)
    if (event.data === 0) {
        event.target.seekTo(0);
        event.target.playVideo();
    }
}


