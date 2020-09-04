class RecipeApiConnection {
    constructor() {
        this.baseUrl = "http://localhost:3000/recipes"
    }

    //get recipes and changes to json then to object.
    getRecipes() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => createRecipes(json.data))
    }

    //get 
    getRandomRecipeByIngredient(ingredient) {
        fetch(this.baseUrl + `/${ingredient}`).then(response => response.json()).then(json => loadRandomRecipe(json.data.attributes))
    }

    //create
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

 