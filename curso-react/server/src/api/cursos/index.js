//serviços rest
const model = require('./model')

model.methods(['get', 'post', 'put', 'delete']) // definindo nossos métodos http dentro do modelo http
model.updateOptions({ new: true, runValidators: true })

module.exports = model