import React, { Component } from 'react'
import { FormCurso } from './form';
import { ListCurso } from './list';
import axios from 'axios'

const URL = 'http://localhost:3200/api/cursos'

export class CadastroCurso extends Component {
    
    //estado inicial da nossa tela, como nossa tela vai ser exibida no momento 0.
    initialState = {
        codigo: '',
        descricao: '',
        cargaHoraria: '',
        preco: '',
        categoria: 'ENGENHARIA'
}

    state = { ...this.initialState, cursos : []}

    constructor(props) {
        super(props)
        this.listar()
    }

    listar(){
        axios.get(URL).then(response =>{
            this.setState({ cursos : response.data })
        }) 
    }

    codigoChange(event){
        this.setState({ codigo : event.target.value })
    }

    descricaoChange(event){
        this.setState({ descricao : event.target.value })
    }

    cargaHorariaChange(event){
        this.setState({ cargaHoraria : event.target.value })
    }

    precoChange(event){
        this.setState({ preco : event.target.value })
    }

    categoriaChange(event){
        this.setState({ categoria : event.target.value })
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

                        cargaHoraria={this.cargaHoraria}
                        cargaHorariaChange={this.cargaHorariaChange.bind(this)}

                        preco={this.state.preco}
                        precoChange={this.precoChange.bind(this)}

                        categoria={this.state.categoria}
                        categoriaChange={this.categoriaChange.bind(this)}
                    />
                </div>
                <div className="col-md-6">
                    <ListCurso cursos={this.state.cursos}/> {/* toda vez que for chamado, o ListCurso vai receber uma alteração do state.cursos     cursos=    é uma props */} 
                </div>
            </div>
        )
    }
}