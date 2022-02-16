const s = require('./config/server')
require('./config/db')
const rotas = require('./config/routes')(s)