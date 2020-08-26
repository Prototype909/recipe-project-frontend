const RECIPES_URL = "http://localhost:3000/recipes"

class Recipe (
    constructor(title, imageLink, recipeLink, ingredients ) {
        this.title = title;
        this.imageLink = imageLink;
        this.recipeLink = recipeLink;
        this.ingredients = ingredients;
    }

    createRecipeCard() {
        const carContainer = document.getElementById('recipe-card-container')
        const card = document.createElement('div')
        card.className = "card"
        const title = document.createElement('h1')
        title.innerHTML = this.title
        card.appendChild(title)
        const img = document.getElementById('img')
        img.src = this.imageLink
        card.appendChild(img)
        const link = document.createElement('lnk')
        link.src = this.recipeLink
        
    }
)