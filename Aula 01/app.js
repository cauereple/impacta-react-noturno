const module1 = require('./mod1')
const {mensagem} = require('./mod2') // Em vez de chamar a função de module2, podemos chamar a função criada dentro do escopo {}

module1('Cauê Teste')
mensagem('Teste Módulo2') // Chamamos diretamente a função criada




// m1 ('Carregando uma única função modular');
// m2.(nome da função)('Carregando objeto com funções modulares');