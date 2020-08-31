class RecipeApiConnection {
    constructor() {
        this.baseUrl = "http://localhost:3000/recipes"
    }

    getRecipes() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => createRecipes(json.data))
    }
}

