const INITIAL_STATE = {
    data: '2019-12-11T22:12:32.560Z',
    nome: 'Cauê',
    email: 'caue-reple@hotmail.com',
    telefone: 11983224815,
    assunto: 'Informações sobre React'
}
//state = INITIAL_STATE recebo um parametro, se esse parametro estiver indefinido, ele será o valor colocado depois do igual
export default function(state = INITIAL_STATE, action){ // Definição padrão de um redutor --> export default com state e action
    switch(action.type){
        case 'ATUALIZA_DATA' : return {...state, data : action.value}
        case 'ATUALIZA_NOME' : return {...state, nome : action.value}
        default : return state
    }
}