const db = require("../dbConfig")

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes(){
    return db.select("name").from("recipes")
}

function getShoppingList(){
    return db("ingredients")
}

function getInstructions(){
    return db.select("steps").from("recipes")
}