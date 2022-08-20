var audio = new Audio('audio/genshin-bgm.mp3');
var audioNight = new Audio('audio/genshin-watatsumi.mp3');
var clickAudio = new Audio('audio/minecraft-click.mp3');
var muteAudio = new Audio('audio/discord-mute.mp3');
var currentTimeInHr = (new Date()).getHours();

window.onload = function () {
    if ((currentTimeInHr >= 6 && currentTimeInHr < 18)) {
        document.getElementById('my-checkbox').checked = false;
        day();
    } else {
        document.getElementById('my-checkbox').checked = true;
        night();
    }
}

function audioController() {
    if (document.getElementById('my-checkbox').checked === false) {
        if (!audio.paused) {
            pauseAudio();
        } else {
            audio.play();
            audio.loop = true;
            audio.volume = 0.6;
            playAudio();
        }
    } else {
        if (!audioNight.paused) {
            pauseAudio();
        } else {
            audioNight.play();
            audioNight.loop = true;
            audioNight.volume = 0.6;
            playAudio();
        }
    }
}

// Audio Controls

function playAudio() {
    clickAudio.volume = 0.2;
    clickAudio.play();

    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'images/play.png';
    audioPlayer.title = 'Pause';
}

function pauseAudio() {
    muteAudio.volume = 0.2;
    muteAudio.play();

    audio.pause();
    audioNight.pause();

    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'images/pause.png';
    audioPlayer.title = 'Play';
}

function resetAudio() {
    audio.pause();
    audio.currentTime = 0;
    audioNight.pause();
    audioNight.currentTime = 0;
}

// Day-Night Controls

function day() {
    var mySwitch = document.getElementById('my-switch');
    mySwitch.style.backgroundColor = '#87CEEB';
    mySwitch.title = 'Toggle night';

    var icon = document.getElementById('switch-icon');
    icon.classList.remove("bi-stars");
    icon.classList.add("bi-brightness-alt-high-fill");
}

function night() {
    var mySwitch = document.getElementById('my-switch');
    mySwitch.style.backgroundColor = '#001c7c';
    mySwitch.title = 'Toggle day';

    var icon = document.getElementById('switch-icon');
    icon.classList.remove("bi-brightness-alt-high-fill");
    icon.classList.add("bi-stars");
}

function modeCycle() {
    clickAudio.volume = 0.2;
    clickAudio.play();

    if (document.getElementById('my-checkbox').checked) {
        night();
    } else {
        day();
    }
    
    resetAudio();
}
