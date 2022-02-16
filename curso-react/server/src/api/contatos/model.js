//criando o schema
const restful = require('node-restful')
const Schema = restful.mongoose.Schema //referencia ao mongoose do restful
//definindo o schema contato
const contatoSchema = new Schema({
    data: { type: Date, require: true},
    nome: { type: String, require: true},
    email: {type: String, require: true},
    telefone: {type: Number},
    assunto: { type: String, require: true}
});

module.exports = restful.model('contato', contatoSchema);