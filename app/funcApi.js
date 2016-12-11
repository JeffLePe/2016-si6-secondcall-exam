"use strict"

const express = require("express")
const router = express.Router()
const employeeDB = require("./employeeDB.json")

function searchFuncionario(funcId) {
    return employeeDB.find(employee => employee.id === funcId)
}

/*router.get("/", (request, response) => {
    response.json(employeeDB)
})*/

router.get("/:id", (request, response) => {
    var funcId = request.params.id
    var funcionario = searchFuncionario(funcId)
    
    if(funcionario) {
        var dataNasc = funcionario.dateOfBirth
        var dataAtual = new Date()
        var idade
        
        var ano = dataNasc.slice(0, 4)
        var mes = dataNasc.slice(5, 7)
        var dia = dataNasc.slice(8, 10)

        if((dataAtual.getMonth() + 1) >= mes && dataAtual.getDate() >= dia) {
            console.log("Calculando idade")
            idade = dataAtual.getFullYear() - ano
        }
        else {
            idade = (dataAtual.getFullYear() - ano) - 1
        }
        funcionario.idade = idade
        console.log("Pronto para responder a requisição")
        response.json(funcionario)
    }
    else {
        response.json({error: "Funcionario não encontrado!"})
    }
})

module.exports = router