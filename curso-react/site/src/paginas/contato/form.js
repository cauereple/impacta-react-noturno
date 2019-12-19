import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux' // transforma as funções em action creators. Vamos usar essa propriedade do redux para usar a função abaixo como props
import { 
    dataOnChange, // aqui importamos as funções criadas nas Actions
    nomeOnChange

} from '../../actions/contatoActions' //Agora fazemos todos os callbacks (funções genéricas) como Actions, separadamente e deopis importamos para onde queremos usar


class ContatoForm extends React.Component {
    render() {
        return (
            <div>
                <h3 className="border-bottom">Formulário</h3>
                <form>
                    <div className="form-group row">
                        <label htmlFor="data"
                            className="col-sm-3 col-form-label">Data:</label>
                        <div className="col-sm-5 col-6">
                            <input type="date"
                                className="form-control" id="data"
                                value={this.props.data}
                                //onChange espera uma função que tem como parâmetro um evento
                                onChange={this.props.dataOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="nome"
                            className="col-sm-3 col-form-label">Nome:</label>
                        <div className="col-sm-9">
                            <input type="text"
                                className="form-control" id="nome"
                                value={this.props.nome} 
                                onChange={this.props.nomeOnChange} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="email"
                            className="col-sm-3 col-form-label">Email:</label>
                        <div className="col-sm-9">
                            <input type="email"
                                className="form-control" id="email"
                                value={this.props.email} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="telefone"
                            className="col-sm-3 col-form-label">Telefone:</label>
                        <div className="col-sm-9">
                            <input type="number"
                                className="form-control" id="telefone"
                                value={this.props.telefone} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label htmlFor="assunto"
                            className="col-sm-3 col-form-label">Assunto:</label>
                        <div className="col-sm-9">
                            <textarea className="form-control"
                                id="assunto" rows="5"
                                value={this.props.assunto} />
                        </div>
                    </div>
                    <div className="form-group row">
                        <button className="btn btn-primary ml-3 mb-3">
                            Adicionar
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStoreToProps = store => ({ //pega da store e trazer em forma de props
    data: store.contato.data,
    nome: store.contato.nome,
    email: store.contato.email,
    telefone: store.contato.telefone,
    assunto: store.contato.assunto
})

const mapActionToProps = dispatch => bindActionCreators({
    dataOnChange,
    nomeOnChange
}, dispatch)

export default connect(mapStoreToProps, mapActionToProps)(ContatoForm)