import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {

    //estado inicial da nossa tela, como nossa tela vai ser exibida no momento 0.
    initialState = {
        _id: null,
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
    }

    state = { ...this.initialState, cursos: [] } // fazemos dessa forma para o cursos não apagar quando zerarmos o state

    constructor(props) {
        super(props)
        this.listar()
    }

    listar() {
        axios.get(URL).then(response => {
            this.setState({ cursos: response.data })
        })
    }

    codigoChange(event) {
        this.setState({ codigo: event.target.value })
    }

    descricaoChange(event) {
        this.setState({ descricao: event.target.value })
    }

    cargaHorariaChange(event) {
        this.setState({ cargaHoraria: event.target.value })
    }

    precoChange(event) {
        this.setState({ preco: event.target.value })
    }

    categoriaChange(event) {
        this.setState({ categoria: event.target.value })
    }

    adicionar(event) {
        event.preventDefault()

        const { _id, codigo, descricao, cargaHoraria, categoria, preco } = this.state

        // podemos criar um json para ser usado.
        // não precisamos fazer chave : valor, se declararmos uma chave que já é um nome existente de variável que criamos anteriormente. Então ele pega essa "chave" e cria um json com o valor igual a essa "chave" no nosso banco de dados
        const body = {
            codigo,
            descricao,
            cargaHoraria,
            categoria,
            preco
        }

        if (_id) {
            axios.put(`${URL}/${_id}`, body)
                .then(_ => this.trataSucesso(event, 'Curso atualizado'))
                .catch(error => this.trataErro(error, 'Ocorreu erro ao adicionar curso'))
        } else {
            axios.post(URL, body)
                .then(_ => this.trataSucesso(event, 'Curso adicionado'))
                .catch(error => this.trataErro(error, 'Ocorreu erro ao adicionar curso'))
        }
    }

    trataSucesso(event, msg) {
        this.limpar(event) // limpamos a lista do formulário
        this.listar() // para trazer atualizado do banco de dados
        alert(msg)
    }

    trataErro(error, msg) {
        console.log(error)
        alert(msg)
    }

    limpar(event) {
        if(event){
            event.preventDefault()
        }
        
        this.setState(this.initialState)
    }

    remover(curso) {
        if (window.confirm(`Deseja realmente deletar o curso - ${curso.descricao}?`)) {
            axios.delete(`${URL}/${curso._id}`)
                .then(_ => {
                    this.trataSucesso(null, 'Curso deletado')
                })
                .catch(error => {
                    this.trataErro(error, 'Ocorreu erro ao adicionar curso')
                })
        }
    }

    consultar(curso) {
        this.setState({
            _id: curso._id,
            codigo: curso.codigo,
            descricao: curso.descricao,
            cargaHoraria: curso.cargaHoraria,
            preco: curso.preco,
            categoria: curso.categoria
        })
    }

    render() {
        return (
            <div className="row border-bottom">
                <div className="col-md-6">
                    <FormCurso
                        /* do lado esquerdo é a chave e do lado direito o valor. 
                        nesse caso do lado esquerdo é o nome da props, e do lado direito está buscando do state Vamos chamar essa props no nosso formulário, já que aqui estamos alterando o state*/
                        codigo={this.state.codigo}
                        codigoChange={this.codigoChange.bind(this)}

                        descricao={this.state.descricao}
                        descricaoChange={this.descricaoChange.bind(this)}

                        cargaHoraria={this.state.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}

                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}

                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}

                        adicionar={this.adicionar.bind(this)} //Não passamos o parênteses aqui, pq não queremos que o código a execute nessa parte, passamos apenas a referência da mesma
                        limpar={this.limpar.bind(this)}

                        isAtualizar={this.state._id ? true : false}
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso
                        cursos={this.state.cursos} /* toda vez que for chamado, o ListCurso vai receber uma alteração do state.cursos     cursos=    é uma props */
                        removerCurso={this.remover.bind(this)}
                        consultarCurso={this.consultar.bind(this)}
                    />
                </div>
            </div>
        )
    }
}