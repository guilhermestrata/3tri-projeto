//Require no consign
const consign = require('consign')
// Require no express
const express = require('express')
const { model } = require('mongoose')
// executa o express
const app = express()
// Pega uma porta para o servidor
const porta = process.env.PORT || 3030
// Permite uso de formulario 
app.use(express.urlencoded({extended:false}))
// usa o consign e define as rotas
consign().include('./routes').into(app)
// define a pasta do css
app.use(express.static('./assets/'))
// export app e porta
module.exports = {app, porta}