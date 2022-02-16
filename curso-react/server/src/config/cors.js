// Arrow Function
// Toda vez que recebermos uma requisição, vamos bloquear na entrada dando dos os parâmetros abaixo. Caso ele não se adeque, ele nem entra na minha API
module.exports = (_, response, next) => {
    response.header("Access-Control-Allow-Origin", "*"); 
    response.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    
    next(); //necessário para dar continuidade ao processo de requisição
} 