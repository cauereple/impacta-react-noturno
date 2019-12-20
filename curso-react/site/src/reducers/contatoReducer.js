const INITIAL_STATE = {
    data: '',
    nome: '',
    email: '',
    telefone: '',
    assunto: ''
}
//state = INITIAL_STATE recebo um parametro, se esse parametro estiver indefinido, ele será o valor colocado depois do igual. o Nome disso é DEFAULT PARAMETER
export default function(state = INITIAL_STATE, action){ // Definição padrão de um redutor --> export default com state e action
    switch(action.type){ // switch é um controlador de fluxo. Ele olha cada if, em vez de fazermos vários if's
        case 'ATUALIZA_DATA' : return {...state, data : action.value}
        case 'ATUALIZA_NOME' : return {...state, nome : action.value}
        case 'ATUALIZA_EMAIL' : return {...state, email : action.value}
        case 'ATUALIZA_TELEFONE' : return {...state, telefone : action.value}
        case 'ATUALIZA_ASSUNTO' : return {...state, assunto : action.value}
        case 'LIMPAR_FORM' : return INITIAL_STATE
        default : return state
    }
}