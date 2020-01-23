const express = require("express")
const server = express()
const recipeRouter = require("./recipeRouter")
server.use(express.json())


server.get("/", (req,res) => {
    res.json({hello: "world"})
})

server.use("/api/recipes", recipeRouter)



module.exports = server