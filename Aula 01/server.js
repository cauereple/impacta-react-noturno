// Referência ao módulo http
const http = require('http')

const requisicao = function(request, response) {
    // o objeto dentro da função é um json ('chave' : 'valor')
    response.writeHead(200, { 'Content-Type' : 'text/html' }) 
    response.write('<h1>Texto a ser exibido no Browser</h1>')
    response.end() // .end é usado para terminar a requisição. É obrigatório terminar
}


// Criando o servidor

const server = http.createServer(requisicao)

const resultado = function(){
    console.log('Servidor em funcionamento')
}

server.listen(3000, resultado)

// Após feito o código, vamos no terminal do node e inicializamos o servidor, ai após isso poderemos ir no navegador e digitar localhost:3000 -> onde 3000 é a porta do servidor. Para colocar a porta, sempre usar :