"use strict"

const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(express.static("public"))

app.get("/", function (request, response) {
    response.sendFile("index.html")
})

app.use("/api/employees", require("./app/funcApi"))

var server = app.listen(3000)
console.log("Servidor iniciado na porta: " + server.address().port)