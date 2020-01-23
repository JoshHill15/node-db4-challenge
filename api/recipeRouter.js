const express = require("express")
const router = express.Router()

const Recipe = require("./recipe-model")

router.get("/", async (req,res) => {
    const recipes = await Recipe.getRecipes()
    if (recipes) res.status(200).json(recipes)
    else res.status(500).json({ error: "can't connect to recipes" })

})

router.get("/shoppingList", async (req,res) => {
    const shoppingList = await Recipe.getShoppingList()
    if (shoppingList) res.status(200).json(shoppingList)
    else res.status(500).json({ error: "can't connect to shopping list" })
})

router.get("/instructions", async (req,res) => {
    const instructions = await Recipe.getInstructions()
    if (instructions) res.status(200).json(instructions)
    else res.status(500).json({ error: "can't connect to instructions" })
})

module.exports = router