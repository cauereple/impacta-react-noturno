import { combineReducers } from 'redux' // combina os reducers
import contatoReducer from './contatoReducer'


const reducers = combineReducers({ //junta váris funções redutoras
    contato : contatoReducer // chamamos nossa função redutora de tabela contato
})

export default reducers // é tipo um "array", volta o resultado do combineReducers