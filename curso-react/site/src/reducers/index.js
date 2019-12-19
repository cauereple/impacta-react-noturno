import { combineReducers } from 'redux'
import contatoReducer from './contatoReducer'


const reducers = combineReducers({ //junta váris funções redutoras
    contato : contatoReducer // chamamos nossa função redutora de tabela contato
})

export default reducers