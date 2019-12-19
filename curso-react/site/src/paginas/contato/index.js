import React from 'react'
import {Cabecalho} from '../../componentes/cabecalho'
import ContatoForm from './form'
import { connect } from 'react-redux' // essa função faz a conexão de componentes na store. É o subscribe

// não usamos o export, pq vamos usar o Componente com o connect. Se fizermos o export aqui, não vai conectar com o componente no connect
class ContatoIndex extends React.Component {
    render() {
        return (
            <div className="container">
                <Cabecalho titulo="Contato" subtitulo={`Quer entrar em contato conosco - ${this.props.nome}`}/>
                <ContatoForm/>
            </div>
        )
    }
}

//Toda essa parte abaixo é o subscribe --> connect. Essa parte é o get.
const mapStoreToProps = store => ({
    nome : store.contato.nome
})

const Conectado = connect(mapStoreToProps, null)(ContatoIndex)

export {Conectado as ContatoIndex}