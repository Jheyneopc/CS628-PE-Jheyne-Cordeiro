const axios = require("axios");

axios.post("http://localhost:5000/recipes", {
    name: "Brazilian Corn Cake",
    ingredients: [
        "2 cups of cornmeal",
        "1 cup of milk",
        "1 cup of sugar",
        "3 eggs",
        "1/2 cup of vegetable oil",
        "1 tablespoon of baking powder",
        "1/2 teaspoon of salt"
    ],
    instructions: "Preheat the oven to 350°F (175°C). Blend all ingredients in a blender until smooth. Pour the mixture into a greased baking pan. Bake for about 40 minutes or until golden brown. Let it cool before serving."
})
.then(response => console.log(response.data))
.catch(error => console.error("Error:", error));
