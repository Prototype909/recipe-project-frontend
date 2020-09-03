class IngredientApi {
    constructor() {
      this.baseURL = "http://localhost:3000/ingredients"
    }
  
    getIngredients() {
      return fetch(this.baseURL).then(response => response.json()).then(json => populateIngredientDropDown(json.data))
    }
  }