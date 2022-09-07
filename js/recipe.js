var currentTimeInHr = (new Date()).getHours();
var audio = '';
var audioNight = '';

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
    if (audio == '' || audioNight == '') {
        audio = new Audio('../audio/genshin-main-theme.mp3');
        audioNight = new Audio('../audio/genshin-qilins-prance.mp3');
    }

    if (document.getElementById('my-checkbox').checked === false) {
        if (!audio.paused) {
            pauseAudio();
        } else {
            audio.play();
            audio.loop = true;
            audio.volume = .5;
            playAudio();
        }
    } else {
        if (!audioNight.paused) {
            pauseAudio();
        } else {
            audioNight.play();
            audioNight.loop = true;
            audioNight.volume = 0.3;
            playAudio();
        }
    }
}

function playAudio() {
    var clickAudio = new Audio('../audio/minecraft-click.mp3');
    clickAudio.volume = 0.1;
    clickAudio.currentTime = 0;
    clickAudio.play();

    playImg(1);
}

function pauseAudio() {
    var muteAudio = new Audio('../audio/discord-mute.mp3');

    muteAudio.volume = 0.08;
    muteAudio.play();

    audio.pause();
    audioNight.pause();

    playImg(0);
}

function playImg(audioOption) {
    var audioPlayer = '';
    if (audioOption == 1) {
        var audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = '../images/play.webp';
        audioPlayer.title = 'Pause audio';
    } else {
        audioPlayer = document.getElementById('audio-player');
        audioPlayer.src = '../images/pause.webp';
        audioPlayer.title = 'Play audio';
    }
}

function resetAudio() {
    audio.pause();
    audio.currentTime = 0;
    audioNight.pause();
    audioNight.currentTime = 0;

    playImg(0);
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

if (recipeParam != null && recipeParam[1] >= 1 && recipeParam[1] <= 5) {
    recipeParam = recipeParam[1];
    sliderController();
} else {
    recipeParam = 1;
    sliderController();
}

// Sliders control (Not the best approach!!)
function sliderController() {
    var cardOne = document.querySelector('.card-one');
    var cardMain = document.querySelector('.main-card');
    var cardTwo = document.querySelector('.card-two');

    if (recipeParam == 1) {
        cardOne.innerHTML = dish5;
        cardMain.innerHTML = dish1;
        cardTwo.innerHTML = dish2;
    } else if (recipeParam == 2) {
        cardOne.innerHTML = dish1;
        cardMain.innerHTML = dish2;
        cardTwo.innerHTML = dish3;
    } else if (recipeParam == 3) {
        cardOne.innerHTML = dish2;
        cardMain.innerHTML = dish3;
        cardTwo.innerHTML = dish4;
    } else if (recipeParam == 4) {
        cardOne.innerHTML = dish3;
        cardMain.innerHTML = dish4;
        cardTwo.innerHTML = dish5;
    } else if (recipeParam == 5) {
        cardOne.innerHTML = dish4;
        cardMain.innerHTML = dish5;
        cardTwo.innerHTML = dish1;
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

    if (audio.paused && audioNight.paused) {
        var audioSlide = new Audio('../audio/slide.wav');
        audioSlide.volume = 0.3;
        audioSlide.play();
    }

    // audio optimised for loading
    if (audio == '' && audioNight == '') {
        var audioSlide = new Audio('../audio/slide.wav');
        audioSlide.volume = 0.3;
        audioSlide.play();
    }

    clearCards();
    sliderController();
}

function clearCards() {
    document.querySelector('.card-one').replaceChildren();
    document.querySelector('.main-card').replaceChildren();
    document.querySelector('.card-two').replaceChildren();
}