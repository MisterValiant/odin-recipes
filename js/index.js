var currentTimeInHr = (new Date()).getHours();
var audio = new Audio('audio/genshin-bgm.mp3');
var audioNight = new Audio('audio/genshin-watatsumi.mp3');

window.onload = function () {
    if ((currentTimeInHr >= 6 && currentTimeInHr < 18)) {
        document.getElementById('my-checkbox').checked = false;
        day();
    } else {
        document.getElementById('my-checkbox').checked = true;
        night();
    }
}

// Background Controls

function backgroundController(tabNumber){
    var myBackground = document.getElementById('main-content');
    var regionName = document.getElementById('location-name');
    var worldName = document.querySelector('.world-name');

    if (!document.getElementById('my-checkbox').checked && tabNumber==1){
        myBackground.style.backgroundImage = 'url(images/mondstadt-day.png)';
        regionName.textContent='Stormbearer Mountains';
        worldName.style.backgroundColor='rgba(0, 228, 170, 0.35)';
    }else if(document.getElementById('my-checkbox').checked && tabNumber==1){
        myBackground.style.backgroundImage = 'url(images/mondstadt-night.png)';
        regionName.textContent='Anemo Archon Statue';
        worldName.style.backgroundColor='rgba(0, 228, 170, 0.35)';
    }else if (!document.getElementById('my-checkbox').checked && tabNumber==2){
        myBackground.style.backgroundImage = 'url(images/liyue-day.png)';
        regionName.textContent='Wangshu Inn';
        worldName.style.backgroundColor='rgba(255, 189, 66, 0.747)';
    }else if(document.getElementById('my-checkbox').checked && tabNumber==2){
        myBackground.style.backgroundImage = 'url(images/liyue-night.png)';
        regionName.textContent='Qingce Village';
        worldName.style.backgroundColor='rgba(255, 189, 66, 0.747)';
    }else if (!document.getElementById('my-checkbox').checked && tabNumber==3){
        myBackground.style.backgroundImage = 'url(images/inazuma-day.png)';
        regionName.textContent='City of Eternity';
        worldName.style.backgroundColor='rgba(250, 55, 205, 0.597)';
    }else if(document.getElementById('my-checkbox').checked && tabNumber==3){
        myBackground.style.backgroundImage = 'url(images/inazuma-night.png)';
        regionName.textContent='Amakane Island';
        worldName.style.backgroundColor='rgba(250, 55, 205, 0.597)';
    }else if(!document.getElementById('my-checkbox').checked && tabNumber==4){
        myBackground.style.backgroundImage = 'url(images/more-day.png)';
        regionName.textContent='Liyue Harbour Oceanview';
        worldName.style.backgroundColor='rgba(250, 55, 205, 0.597)';
    }else if(document.getElementById('my-checkbox').checked && tabNumber==4){
        myBackground.style.backgroundImage = 'url(images/more-night.png)';
        regionName.textContent='Qingyun Peak';
        worldName.style.backgroundColor='white';
    }else{
        myBackground.style.backgroundImage = 'url(images/mondstadt-day.png)';
        regionName.textContent='Stormbearer Mountains';
        worldName.style.backgroundColor='white';
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
    var clickAudio = new Audio('audio/minecraft-click.mp3');
    clickAudio.volume = 0.1;
    clickAudio.currentTime = 0;
    clickAudio.play();

    playImg();
}

function pauseAudio() {
    var muteAudio = new Audio('audio/discord-mute.mp3');

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
    audioPlayer.src = 'images/play.png';
    audioPlayer.title = 'Pause audio';
}

function pauseImg() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'images/pause.png';
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

    currentSelectedTab()
}

function night() {
    var mySwitch = document.getElementById('my-switch');
    mySwitch.style.backgroundColor = '#001c7c';
    mySwitch.title = 'Toggle day';

    var icon = document.getElementById('switch-icon');
    icon.classList.remove("bi-brightness-alt-high-fill");
    icon.classList.add("bi-stars");

    currentSelectedTab()
}

function modeCycle() {
    var clickAudio = new Audio('audio/minecraft-click.mp3');
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

// Region Tab Controls

function tab(tabNumber) {
    var selectedTab = document.querySelector('.location-container li:nth-of-type(' + tabNumber + ')');
    var originalTabID = document.querySelector('.selected-li').id;
    originalTabID = originalTabID.replace('tab', '');

    document.querySelectorAll('.location-container li').forEach(listItem => {
        listItem.classList.remove('selected-li');
    });

    selectedTab.classList.add('selected-li');

    if (audio.paused && audioNight.paused && originalTabID != tabNumber) {
        var tpAudio = new Audio('audio/menu.mp3');
        tpAudio.volume = 0.1;
        tpAudio.play();
    }

    backgroundController(tabNumber);
}

function currentSelectedTab(){
    var currentTab = document.querySelector('.selected-li').id;
    currentTab = currentTab.replace('tab', '');
    backgroundController(currentTab);
}