var currentTimeInHr = (new Date()).getHours();
var audio = new Audio('../audio/genshin-bgm.mp3');
var audioNight = new Audio('../audio/genshin-watatsumi.mp3');

window.onload = function () {
    if ((currentTimeInHr >= 6 && currentTimeInHr < 18)) {
        document.getElementById('my-checkbox').checked = false;
        day();
    } else {
        document.getElementById('my-checkbox').checked = true;
        night();
    }
}

// Audio Controls

function audioController() {
    if (document.getElementById('my-checkbox').checked === false) {
        if (!audio.paused) {
            pauseAudio();
        } else {
            audio.play();
            audio.loop = true;
            audio.volume = 1.0;
            playAudio();
        }
    } else {
        if (!audioNight.paused) {
            pauseAudio();
        } else {
            audioNight.play();
            audioNight.loop = true;
            audioNight.volume = 0.5;
            playAudio();
        }
    }
}

function playAudio() {
    var clickAudio = new Audio('../audio/minecraft-click.mp3');
    clickAudio.volume = 0.1;
    clickAudio.currentTime = 0;
    clickAudio.play();

    playImg();
}

function pauseAudio() {
    var muteAudio = new Audio('../audio/discord-mute.mp3');

    muteAudio.volume = 0.08;
    muteAudio.play();

    audio.pause();
    audioNight.pause();

    pauseImg();
}

function resetAudio() {
    audio.pause();
    audio.currentTime = 0;
    audioNight.pause();
    audioNight.currentTime = 0;

    pauseImg();
}

function playImg() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = '../images/play.png';
    audioPlayer.title = 'Pause audio';
}

function pauseImg() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = '../images/pause.png';
    audioPlayer.title = 'Play audio';
}

// Day-Night Controls

function day() {
    var mySwitch = document.getElementById('my-switch');
    mySwitch.style.backgroundColor = '#87CEEB';
    mySwitch.title = 'Toggle night';

    var icon = document.getElementById('switch-icon');
    icon.classList.remove("bi-stars");
    icon.classList.add("bi-brightness-alt-high-fill");

    backgroundController(0);
}

function night() {
    var mySwitch = document.getElementById('my-switch');
    mySwitch.style.backgroundColor = '#001c7c';
    mySwitch.title = 'Toggle day';

    var icon = document.getElementById('switch-icon');
    icon.classList.remove("bi-brightness-alt-high-fill");
    icon.classList.add("bi-stars");

    backgroundController(1);
}

function modeCycle() {
    var clickAudio = new Audio('../audio/minecraft-click.mp3');
    clickAudio.volume = 0.1;
    clickAudio.currentTime = 0;
    clickAudio.play();

    if (document.getElementById('my-checkbox').checked) {
        night();
    } else {
        day();
    }

    resetAudio();
}

// URL Parameters
var recipeParam = document.URL.match(/recipe=([0-9]+)/);

if (recipeParam!=null && recipeParam[1] >= 1 && recipeParam[1] <= 5) {
    recipeParam = recipeParam[1];
    sliderController();
} else {
    recipeParam = 1;
    sliderController();
}

// Slider
function sliderController() {
    if (recipeParam == 1) {
        document.querySelector('.card-one').innerHTML = dish5;
        document.querySelector('.main-card').innerHTML = dish1;
        document.querySelector('.card-two').innerHTML = dish2;
    } else if (recipeParam == 2) {
        document.querySelector('.card-one').innerHTML = dish1;
        document.querySelector('.main-card').innerHTML = dish2;
        document.querySelector('.card-two').innerHTML = dish3;
    } else if (recipeParam == 3) {
        document.querySelector('.card-one').innerHTML = dish2;
        document.querySelector('.main-card').innerHTML = dish3;
        document.querySelector('.card-two').innerHTML = dish4;
    } else if (recipeParam == 4) {
        document.querySelector('.card-one').innerHTML = dish3;
        document.querySelector('.main-card').innerHTML = dish4;
        document.querySelector('.card-two').innerHTML = dish5;
    } else if (recipeParam == 5) {
        document.querySelector('.card-one').innerHTML = dish4;
        document.querySelector('.main-card').innerHTML = dish5;
        document.querySelector('.card-two').innerHTML = dish1;
    }
}

function slideRecipe(action) {
    if (action == 'next') {
        if (recipeParam == 5) {
            recipeParam = 1;
        } else {
            recipeParam++;
        }
    } else {
        if (recipeParam == 1) {
            recipeParam = 5;
        } else {
            recipeParam--;
        }
    }

    var audioSlide = new Audio('../audio/slide.wav');
    audioSlide.volume = 0.3;
    audioSlide.play();

    clearCards();
    sliderController();
}

function clearCards() {
    document.querySelector('.card-one').replaceChildren();
    document.querySelector('.main-card').replaceChildren();
    document.querySelector('.card-two').replaceChildren();
}