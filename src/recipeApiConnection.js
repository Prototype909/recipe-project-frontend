class RecipeApiConnection {
    constructor() {
        this.baseUrl = "http://localhost:3000/recipes"
    }

    getRecipes() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => createRecipes(json.data))
    }

    getRandomRecipeByIngredient(ingredient) {
        fetch(this.baseUrl + `/${ingredient}`).then(response => response.json()).then(json => loadRandomRecipe(json.data.attributes))
    }

    addRecipe(postBody) {
        const configurationObject = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json"
            },
            body: postBody
          };
          fetch(this.baseUrl, configurationObject)
          .then(response => response.json())
          .catch(error => console.log("Error: " + error))
    }
}

 