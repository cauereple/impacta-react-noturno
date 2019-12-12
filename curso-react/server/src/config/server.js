const port = 3200 // constante para guardar a porta

//middlewares - singletons: commons js
const bodyParser = require('body-parser') // bodyParser ajuda a limitar a entrada e a saída do nosso programa
const express = require('express') // Servidor express
const cors = require('./cors')

const server = express() //novo servidor, baseado no express
//.use é uma função do express

//para toda requisição que chegar, use o bodyparser para
//interpretar chegadas no formato urlencoded
server.use(bodyParser.urlencoded({extended : true}))

//considera o formato json no corpo da requisição
//Nosso servidor só vai receber json
server.use(bodyParser.json())

// plugando o cors no nosso servidor
server.use(cors)

server.listen(port, function(){
    console.log(`Servidor no ar, na porta ${port}`)
})

module.exports = server