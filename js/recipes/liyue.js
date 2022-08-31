//Liyue Background
var myBackground = document.getElementById('main-content-liyue');

function backgroundController(modeNumber) {
    if (modeNumber == 0) {
        myBackground.style.backgroundImage = 'url(../images/liyue-recipe-day.png)';
    } else {
        myBackground.style.backgroundImage = 'url(../images/liyue-recipe-night.png)';
    }
}

//Liyue Recipes
var dish1 = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/liyue/rice-pudding.webp" alt="Rice Pudding"
        title="Rice Pudding">
</div>

<div class="dish-name">
    <p><strong>Rice Pudding</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">The soft, sticky rice and the sweet milk have melded together perfectly, their tastes complementing each other.</p>
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
        <img class="dish-ingredients" src="../images/ingredients/liyue/rice-pudding.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button onclick="window.open('https://restaurants.mu/en/recipe/rice-pudding-recipe.html')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var dish2 = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/liyue/fried-radish-balls.webp" alt="Fried Radish Balls" title="Fried Radish Balls">
</div>

<div class="dish-name">
    <p><strong>Fried Radish Balls</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">It is insane that something so delicious comes from radishes! All who eat them will truly understand Liyue's culinary reputation.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-ATK-Up.webp"
        alt="Attack Up" title="Attack Up Dishes">
    <p class="type-name">Attack Up Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/liyue/fried-radish-balls.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button onclick="window.open('https://duanderful.com/2021/02/28/fried-vegetarian-daikon-radish-balls-萝卜丸子/')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var dish3 = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/liyue/almond-tofu.webp" alt="Almond Tofu" title="Almond Tofu">
</div>

<div class="dish-name">
    <p><strong>Almond Tofu</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">A dessert made from ground almonds. It has the exquisite texture of that of a white jade, and could pass as an art piece.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img cold-resistance" src="../images/effects/Icon-ATK-Up.webp"
        alt="Attack Up Dishes" title="Attack Up Dishes">
    <p class="type-name">Attack Up Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/liyue/almond-tofu.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button
            onclick="window.open('http://www.itsmydish.com/almond-tofu/')"
            class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var dish4 = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/liyue/mora-meat.webp" alt="Mora Meat"
        title="Mora Meat">
</div>

<div class="dish-name">
    <p><strong>Mora Meat</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">With a crispy crust and tender meat, this delicacy is so succulent that not even Mora could distract you from enjoying it.</p>
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
        <img class="dish-ingredients" src="../images/ingredients/liyue/mora-meat.png"
            alt="Ingredients" title="Ingredients">
    </div>
    <div class="btn-container">
        <button
            onclick="window.open('https://natashaskitchen.com/chicken-pot-pie-recipe/')"
            class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;

var dish5 = `<div class="glassmorphism">
<div class="card-top">
    <img src="../images/recipes/liyue/jewellery-soup.webp" alt="Jewellery Soup"
        title="Jewellery Soup">
</div>

<div class="dish-name">
    <p><strong>Jewellery Soup</strong></p>
</div>

<div class="hr-break"></div>

<div class="card-middle">
    <p><strong>Description :</strong><br /></p>
    <p class="dish-description">This mild-tasting soup is filled with the fragrance of fresh vegetables. This heart-warming soup can rival any luxurious dish.</p>
    <br />
    <span class="dish-type">
        <p><strong>Type :</strong><br /></p>
    </span><img class="type-img" src="../images/effects/Icon-DEF-Up.webp"
        alt="Defense Up Dishes" title="Defense Up Dishes">
    <p class="type-name">Defense Up Dishes</p>
</div>

<div class="hr-break"></div>

<div class="card-bottom">
    <div>
        <p><strong>Cooking :</strong></p>
    </div>
    <div class="ingredient-container">
        <img class="dish-ingredients" src="../images/ingredients/liyue/jewellery-soup.png"
            alt="Ingredients" title="Ingredients">
    </div>

    <div class="btn-container">
        <button onclick="window.open('https://www.eatingwell.com/recipe/266956/vegetable-and-tofu-soup/')" class="recipe-btn"><i class="bi bi-search"></i> &nbsp;View real recipe</button>
    </div>
</div>
</div>`;