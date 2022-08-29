var currentTimeInHr = (new Date()).getHours();
var audio = new Audio('../audio/genshin-bgm.mp3');
var audioNight = new Audio('../audio/genshin-watatsumi.mp3');

// Recipes
var pizza = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/mondstadt/pizza.webp" alt="Mushroom Pizza"
        title="Mushroom Pizza">
</div>

<div class="dish-name">
    <p><strong>Mushroom Pizza</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">A pizza covered in cheese and mushrooms. It's a party in
        your mouth and the cheese and mushrooms invited all their delicious friends.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-Regeneration.webp"
        alt="Regenaration" title="Recovery Dishes">
    <p class="type-name">Recovery Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/mondstadt/mushroom-pizza.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button onclick="window.open('https://www.thursdaynightpizza.com/ultimate-mushroom-pizza/')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var hashbrown = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/mondstadt/hash-brown.webp" alt="Hash Brown" title="Hash Brown">
</div>

<div class="dish-name">
    <p><strong>Hash Brown</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">A fried cake of mashed potatoes. A little bit of pinecone helps
        give it a nice crunch. Loved by people of all ages.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-Regeneration.webp"
        alt="Regenaration" title="Recovery Dishes">
    <p class="type-name">Recovery Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/mondstadt/hash-brown.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button onclick="window.open('https://recipes.timesofindia.com/recipes/hash-browns/rs53870279.cms')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var goulash = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/mondstadt/goulash.webp" alt="Goulash" title="Goulash">
</div>

<div class="dish-name">
    <p><strong>Goulash</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">A steaming-hot stew. Just one spoonful sends a down-to-earth
        sense of satisfaction welling up from the depths of your heart.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img cold-resistance" src="../images/effects/Icon-Sheer-Cold-Resistance.webp"
        alt="Cold Resistance" title="Cold Resistance">
    <p class="type-name">Cold Resistance</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/mondstadt/goulash.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button
            onclick="window.open('https://www.easypeasyfoodie.com/easy-chicken-goulash/')"
            class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var fish = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/mondstadt/grilled-fish.webp" alt="Grilled Fish"
        title="Gilled Fish">
</div>

<div class="dish-name">
    <p><strong>Grilled Fish</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">Fish grilled thoroughly with moderate fire locking the
        delicious juices and taste inside the meat under the crispy skin.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-Regeneration.webp"
        alt="Regenaration" title="Recovery Dishes">
    <p class="type-name">Recovery Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/mondstadt/grilled-fish.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button
            onclick="window.open('https://recipes.timesofindia.com/recipes/hash-browns/rs53870279.cms')"
            class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var ratatouille = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/mondstadt/ratatouille.webp" alt="Barbatos Ratatouille"
        title="Barbatos Ratatouille">
</div>

<div class="dish-name">
    <p><strong>Barbatos Ratatouille</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">No matter where you are a piping hot chowder of this sort can
        always give you a sense of real and unsurpassed satisfaction.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-Stamina-Reduction.webp"
        alt="Stamina Reduction" title="Stamina Reduction">
    <p class="type-name">Stamina Reduction</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/mondstadt/ratatouille.png"
            alt="Ingredients" title="Ingredients">
    </div>

    <div class="btn-container">
        <button onclick="window.open('https://tasty.co/recipe/ratatouille')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

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

// Parameters
var recipeParam = document.URL.match(/recipe=([0-9]+)/);

if (recipeParam == null) {
    recipeParam = 1;
    sliderController();
} else {
    recipeParam = recipeParam[1];
    sliderController();
}

// Slider
function sliderController() {
    if (recipeParam == 1) {
        document.querySelector('.card-one').innerHTML = ratatouille;
        document.querySelector('.main-card').innerHTML = pizza;
        document.querySelector('.card-two').innerHTML = hashbrown;
    } else if (recipeParam == 2) {
        document.querySelector('.card-one').innerHTML = pizza;
        document.querySelector('.main-card').innerHTML = hashbrown;
        document.querySelector('.card-two').innerHTML = goulash;
    } else if (recipeParam == 3) {
        document.querySelector('.card-one').innerHTML = hashbrown;
        document.querySelector('.main-card').innerHTML = goulash;
        document.querySelector('.card-two').innerHTML = fish;
    } else if (recipeParam == 4) {
        document.querySelector('.card-one').innerHTML = goulash;
        document.querySelector('.main-card').innerHTML = fish;
        document.querySelector('.card-two').innerHTML = ratatouille;
    } else if (recipeParam == 5) {
        document.querySelector('.card-one').innerHTML = fish;
        document.querySelector('.main-card').innerHTML = ratatouille;
        document.querySelector('.card-two').innerHTML = pizza;
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
    clearCards();
    sliderController();
}

function clearCards() {
    document.querySelector('.card-one').replaceChildren();
    document.querySelector('.main-card').replaceChildren();
    document.querySelector('.card-two').replaceChildren();
}