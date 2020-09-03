// const RECIPES_URL = "http://localhost:3000/recipes" //this will be commented out
const recipeApi =  new RecipeApiConnection
// const INGREDIENTS_URL = "http://localhost:3000/ingredients"
const ingredientApi = new IngredientApi

const formSubmit = document.getElementById("form-submit")
const formButtons = document.getElementById("form-show-buttons")
const addRecipeButton = document.getElementById("add-recipe")
const dropDownButton = document.getElementById("filter-button")
const ingredientDropDown = document.getElementById("filter-dropdown")
const cardContainer = document.getElementById('recipe-card-container')

// class Recipe {
//   constructor(title, imageLink, recipeLink, ingredients) {
//     this.title = title;
//     this.imageLink = imageLink;
//     this.recipeLink = recipeLink;
//     this.ingredients = ingredients;
//   }

//   createRecipeCard() {
//     const card = document.createElement('div')
//     card.className = "card"
//     const img = document.createElement('img')
//     img.src = this.imageLink
//     card.appendChild(img)
//     const cardInfo = document.createElement('div')
//     cardInfo.className = "card-info"
//     const title = document.createElement('h1')
//     title.innerHTML = this.title
//     cardInfo.appendChild(title)
//     const ingHeader = document.createElement('h3')
//     ingHeader.innerHTML = "Ingredients:"
//     cardInfo.appendChild(ingHeader)
//     const ul = document.createElement('ul')
//     for (ingredient of this.ingredients) {
//       let li = document.createElement('li')
//       li.innerHTML = ingredient
//       ul.appendChild(li)
//     }
//     cardInfo.appendChild(ul)
//     const link = document.createElement('a')
//     link.href = this.recipeLink
//     link.innerHTML = "View Recipe Here"
//     cardInfo.appendChild(link)
//     card.appendChild(cardInfo)
//     cardContainer.appendChild(card)
//   }

// }

// function getRecipes() {
//   fetch(RECIPES_URL).then(response => response.json()).then(json => createRecipes(json.data))
// }

function createRecipes(recipes) {
  const recipeArray = []
  for (recipe of recipes) {
    let ingredientArray = [];
    for (ingredient of recipe.attributes.ingredients) {
      ingredientArray.push(ingredient.name) // should be ingredient objects ex. .push(new ingredient)
    }
    recipeArray.push(new Recipe(recipe.attributes.title, recipe.attributes.image_link, recipe.attributes.recipe_link, ingredientArray))
  }
  return addRecipesToDom(recipeArray)
}

function addRecipesToDom(recipeArray) {
  for (recipe of recipeArray) {
    recipe.createRecipeCard()
  }
}

document.addEventListener("DOMContentLoaded", function() {
  console.log("DOMloaded")
  recipeApi.getRecipes();
  formSubmit.addEventListener("click", function() {
    event.preventDefault();
    addRecipe();
  })
  addRecipeButton.addEventListener("click", function() {
    toggleForm();
    toggleButtons();
  })
  dropDownButton.addEventListener("click", function() {
    toggleDropDown();
    toggleButtons();
  })
  ingredientDropDown.addEventListener("change", function() {
    getRandomRecipeByIngredient();
  })
})

function toggleForm() {
  const form = formSubmit.parentElement;
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
  } else {
    form.className += " hidden";
  }
}

function clearRecipes() {
  cardContainer.innerHTML = ""
}

function toggleDropDown() {
  const dropDown = document.getElementById("filter-drop-down")
  if (dropDown.classList.contains("hidden")) {
    dropDown.classList.remove("hidden");
  } else {
    dropDown.className += " hidden"
  }
  
  ingredientApi.getIngredients();
}

// function getIngredients() {
//   fetch(INGREDIENTS_URL).then(response => response.json()).then(json => populateIngredientDropDown(json.data))
// }

function populateIngredientDropDown(data) {
  data.sort((a, b) => (a.attributes.name.toUpperCase() > b.attributes.name.toUpperCase()) ? 1 : -1)
  for (ingredient of data) {
    let option = document.createElement("option")
    option.value = ingredient.attributes.name
    option.innerHTML = ingredient.attributes.name
    ingredientDropDown.appendChild(option)
  }
}

function toggleButtons() {
  if (formButtons.classList.contains("hidden")) {
    formButtons.classList.remove("hidden");
  } else {
    formButtons.className += " hidden";
  }
}


function addRecipe() {
  const form = event.target.parentElement
  const ingredients = form[3].value.split(', ')
  const recipe = new Recipe(form[0].value, form[1].value, form[2].value, ingredients)
  const postBody = JSON.stringify({
    "title": form[0].value,
    "image_link": form[1].value,
    "recipe_link": form[2].value,
    "ingredients": ingredients
  })
  recipeApi.addRecipe(postBody)

  recipe.createRecipeCard();
    toggleButtons();
    toggleForm();
  }

function getRandomRecipeByIngredient() {
  clearRecipes();
  const ingredient = event.target.value
  console.log(ingredient)
  recipeApi.getRandomRecipeByIngredient(ingredient)
  // fetch(recipeApi.baseUrl + `/${ingredient}`).then(response => response.json()).then(json => loadRandomRecipe(json.data.attributes))
}

function loadRandomRecipe(recipe) {
  let ingredientArray = [];
  for (ingredient of recipe.ingredients) {
    ingredientArray.push(ingredient.name)
  }
  const r = new Recipe(recipe.title, recipe.image_link, recipe.recipe_link, ingredientArray)
  r.createRecipeCard();
}