//criando o schema e fazendo um destructor (atributo mongoose que existe dentro do restful 
//em vez de usar const mongoose = restful.mongoose;), que faz referência ao mongoose ao restful
const restful = require('node-restful');

//criamos a variável Schema para não precisar fazer sempre mongoose.Schema
const Schema = restful.mongoose.Schema

//definindo o schema curso
const cursoSchema = new Schema ({
    codigo: { type: Number, required: true },
    descricao: { type: String, required: true },
    cargaHoraria: { type: Number, required: true, min: 4 },
    preco: { type: Number, min: 0 },
    categoria: {type: String, uppercase: true,
    enum:['INFORMATICA', 'ENGENHARIA', 'ADMINISTRACAO', 'REDES']} //tipos de strings que minha categoria aceita
})

module.exports = restful.model('curso', cursoSchema)
