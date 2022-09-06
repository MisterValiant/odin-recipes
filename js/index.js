var currentTimeInHr = (new Date()).getHours();
var audio = new Audio('audio/genshin-main-theme.mp3');
var audioNight = new Audio('audio/genshin-qilins-prance.mp3');

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

function backgroundController(tabNumber) {
    var myBackground = document.querySelector('.background-img img:nth-of-type(' + tabNumber + ')');
    var backBackground = document.querySelector('.background-img');
    var regionName = document.getElementById('location-name');
    var worldName = document.querySelector('.world-name');

    document.querySelectorAll('.background-img img').forEach(listItem => {
        listItem.style.opacity = 0;
    });

    if (!document.getElementById('my-checkbox').checked && tabNumber == 1) {
        myBackground = document.querySelector('.background-img img:nth-of-type(1)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Stormbearer Mountains';
        worldName.style.backgroundColor = 'rgba(0, 228, 170, 0.35)';
        backBackground.style.backgroundImage = 'url(images/mondstadt-day.webp)';
    } else if (document.getElementById('my-checkbox').checked && tabNumber == 1) {
        myBackground = document.querySelector('.background-img img:nth-of-type(2)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Anemo Archon Statue';
        worldName.style.backgroundColor = 'rgba(0, 228, 170, 0.35)';
        backBackground.style.backgroundImage = 'url(images/mondstadt-night.webp)';
    } else if (!document.getElementById('my-checkbox').checked && tabNumber == 2) {
        myBackground = document.querySelector('.background-img img:nth-of-type(3)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Wangshu Inn';
        worldName.style.backgroundColor = 'rgba(255, 189, 66, 0.747)';
        backBackground.style.backgroundImage = 'url(images/liyue-day.webp)';
    } else if (document.getElementById('my-checkbox').checked && tabNumber == 2) {
        myBackground = document.querySelector('.background-img img:nth-of-type(4)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Qingce Village';
        worldName.style.backgroundColor = 'rgba(255, 189, 66, 0.747)';
        backBackground.style.backgroundImage = 'url(images/liyue-night.webp)';
    } else if (!document.getElementById('my-checkbox').checked && tabNumber == 3) {
        myBackground = document.querySelector('.background-img img:nth-of-type(5)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'City of Eternity';
        worldName.style.backgroundColor = 'rgba(250, 55, 205, 0.597)';
        backBackground.style.backgroundImage = 'url(images/inazuma-day.webp)';
    } else if (document.getElementById('my-checkbox').checked && tabNumber == 3) {
        myBackground = document.querySelector('.background-img img:nth-of-type(6)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Amakane Island';
        worldName.style.backgroundColor = 'rgba(250, 55, 205, 0.597)';
        backBackground.style.backgroundImage = 'url(images/inazuma-night.webp)';
    } else if (!document.getElementById('my-checkbox').checked && tabNumber == 4) {
        myBackground = document.querySelector('.background-img img:nth-of-type(7)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Liyue Harbour Oceanview';
        worldName.style.backgroundColor = 'white';
        backBackground.style.backgroundImage = 'url(images/more-day.webp)';
    } else if (document.getElementById('my-checkbox').checked && tabNumber == 4) {
        myBackground = document.querySelector('.background-img img:nth-of-type(8)');
        myBackground.style.opacity = 1;
        regionName.textContent = 'Qingyun Peak';
        worldName.style.backgroundColor = 'white';
        backBackground.style.backgroundImage = 'url(images/more-night.webp)';
    } else {
        myBackground.style.opacity = 1;
        regionName.textContent = 'Stormbearer Mountains';
        worldName.style.backgroundColor = 'white';
        backBackground.style.backgroundImage = 'url(images/mondstadt-day.webp)';
    }

    recipeController(tabNumber);
}

function recipeController(tabNumber) {
    var mondstadt = document.getElementById('mondstadt-recipe');
    var liyue = document.getElementById('liyue-recipe');
    var inazuma = document.getElementById('inazuma-recipe');


    if (tabNumber == 1) {
        mondstadt.style.opacity = 1;
        liyue.style.opacity = 0;
        inazuma.style.opacity = 0;

        mondstadt.style.zIndex = 1;
        liyue.style.zIndex = -1;
        inazuma.style.zIndex = -1;
    } else if (tabNumber == 2) {
        mondstadt.style.opacity = 0;
        liyue.style.opacity = 1;
        inazuma.style.opacity = 0;

        mondstadt.style.zIndex = -1;
        liyue.style.zIndex = 1;
        inazuma.style.zIndex = -1;
    } else if (tabNumber == 3) {
        mondstadt.style.opacity = 0;
        liyue.style.opacity = 0;
        inazuma.style.opacity = 1;

        mondstadt.style.zIndex = -1;
        liyue.style.zIndex = -1;
        inazuma.style.zIndex = 1;
    } else if (tabNumber == 4) {
        mondstadt.style.opacity = 0;
        liyue.style.opacity = 0;
        inazuma.style.opacity = 0;

        mondstadt.style.zIndex = -1;
        liyue.style.zIndex = -1;
        inazuma.style.zIndex = -1;
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
    audioPlayer.src = 'images/play.webp';
    audioPlayer.title = 'Pause audio';
}

function pauseImg() {
    var audioPlayer = document.getElementById('audio-player');
    audioPlayer.src = 'images/pause.webp';
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

        dishController(tabNumber);
    }

    backgroundController(tabNumber);
}

function currentSelectedTab() {
    var currentTab = document.querySelector('.selected-li').id;
    currentTab = currentTab.replace('tab', '');
    backgroundController(currentTab);
}

// Dish Controls

function dishController(tabNumber) {
    resetDish();

    if (tabNumber == 1) {
        var dishImage = document.querySelector('.mondstadt-images .mondstadt-dishes:nth-of-type(' + 1 + ')');
        dishImage.style.opacity = 1;
        dishImage.style.zIndex = 1;
        var myDish = document.querySelector('.mondstadt-description .mondstadt-dishes:nth-of-type(' + 1 + ')');
        myDish.style.opacity = 1;
        myDish.style.zIndex = 1;

    } else if (tabNumber == 2) {
        var dishImage = document.querySelector('.liyue-images .liyue-dishes:nth-of-type(' + 1 + ')');
        dishImage.style.opacity = 1;
        dishImage.style.zIndex = 1;
        var myDish = document.querySelector('.liyue-description .liyue-dishes:nth-of-type(' + 1 + ')');
        myDish.style.opacity = 1;
        myDish.style.zIndex = 1;

    } else if (tabNumber == 3) {
        var dishImage = document.querySelector('.inazuma-images .inazuma-dishes:nth-of-type(' + 1 + ')');
        dishImage.style.opacity = 1;
        dishImage.style.zIndex = 1;
        var myDish = document.querySelector('.inazuma-description .inazuma-dishes:nth-of-type(' + 1 + ')');
        myDish.style.opacity = 1;
        myDish.style.zIndex = 1;

    } else if (tabNumber == 4) {
        var dishImage = document.querySelector('.more-images .more-dishes');
        dishImage.style.opacity = 1;
        dishImage.style.zIndex = 1;
        var myDish = document.querySelector('.more-description .more-dishes');
        myDish.style.opacity = 1;
        myDish.style.zIndex = 1;
    }
}

function resetDish() {
    document.querySelectorAll('.mondstadt-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });
    document.querySelectorAll('.liyue-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });
    document.querySelectorAll('.inazuma-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });
    document.querySelectorAll('.more-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });


    document.querySelectorAll('#mondstadt-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });
    document.querySelectorAll('#liyue-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });
    document.querySelectorAll('#inazuma-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });

    document.querySelector('#mondstadt-recipe li:nth-of-type(1)').classList.add('selected-dish');
    document.querySelector('#liyue-recipe li:nth-of-type(1)').classList.add('selected-dish');
    document.querySelector('#inazuma-recipe li:nth-of-type(1)').classList.add('selected-dish');

}

function mondstadtDish(dishNumber) {
    var selectedDish = document.querySelector('#mondstadt-recipe li:nth-of-type(' + dishNumber + ')');
    var originalDishID = document.querySelector('#mondstadt-recipe .selected-dish').id;
    originalDishID = originalDishID.replace('dish', '');

    document.querySelectorAll('#mondstadt-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });

    selectedDish.classList.add('selected-dish');

    if (audio.paused && audioNight.paused && originalDishID != dishNumber) {
        var dishAudio = new Audio('audio/select-dish.mp3');
        dishAudio.volume = 0.08;
        dishAudio.play();
    }

    document.querySelectorAll('.mondstadt-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });

    var dishImage = document.querySelector('.mondstadt-dishes:nth-of-type(' + dishNumber + ')');
    dishImage.style.opacity = 1;
    dishImage.style.zIndex = 1;
    var myDish = document.querySelector('.mondstadt-description .mondstadt-dishes:nth-of-type(' + dishNumber + ')');
    myDish.style.opacity = 1;
    myDish.style.zIndex = 1;
}

function liyueDish(dishNumber) {
    var selectedDish = document.querySelector('#liyue-recipe li:nth-of-type(' + dishNumber + ')');
    var originalDishID = document.querySelector('#liyue-recipe .selected-dish').id;
    originalDishID = originalDishID.replace('dish', '');

    document.querySelectorAll('#liyue-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });

    selectedDish.classList.add('selected-dish');

    if (audio.paused && audioNight.paused && originalDishID != dishNumber) {
        var dishAudio = new Audio('audio/select-dish.mp3');
        dishAudio.volume = 0.08;
        dishAudio.play();
    }

    document.querySelectorAll('.liyue-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });

    var dishImage = document.querySelector('.liyue-dishes:nth-of-type(' + dishNumber + ')');
    dishImage.style.opacity = 1;
    dishImage.style.zIndex = 1;
    var myDish = document.querySelector('.liyue-description .liyue-dishes:nth-of-type(' + dishNumber + ')');
    myDish.style.opacity = 1;
    myDish.style.zIndex = 1;
}

function inazumaDish(dishNumber) {
    var selectedDish = document.querySelector('#inazuma-recipe li:nth-of-type(' + dishNumber + ')');
    var originalDishID = document.querySelector('#inazuma-recipe .selected-dish').id;
    originalDishID = originalDishID.replace('dish', '');

    document.querySelectorAll('#inazuma-recipe li').forEach(listItem => {
        listItem.classList.remove('selected-dish');
    });

    selectedDish.classList.add('selected-dish');

    if (audio.paused && audioNight.paused && originalDishID != dishNumber) {
        var dishAudio = new Audio('audio/select-dish.mp3');
        dishAudio.volume = 0.08;
        dishAudio.play();
    }

    document.querySelectorAll('.inazuma-dishes').forEach(listItem => {
        listItem.style.opacity = 0;
        listItem.style.zIndex = -1;
    });

    var dishImage = document.querySelector('.inazuma-dishes:nth-of-type(' + dishNumber + ')');
    dishImage.style.opacity = 1;
    dishImage.style.zIndex = 1;
    var myDish = document.querySelector('.inazuma-description .inazuma-dishes:nth-of-type(' + dishNumber + ')');
    myDish.style.opacity = 1;
    myDish.style.zIndex = 1;
}

// Browse to recipe page
function browseRecipe(recipeID) {

    var locationID = recipeID.charAt(0);
    var dishID = recipeID.charAt(1);
    var destination = '';

    if (locationID == 'm') {
        destination = 'html/mondstadt.html?recipe=';
    } else if (locationID == 'l') {
        destination = 'html/liyue.html?recipe=';
    } else if (locationID == 'i') {
        destination = 'html/inazuma.html?recipe=';
    } else {
        alert('Error 404! The recipe page for this dish does not exist. Contact the author to get it fix.');
    }

    if (destination != '') {
        window.location.href = destination + dishID;
    }
}