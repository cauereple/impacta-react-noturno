import React, { Component } from 'react'

export class ListCurso extends Component {

    exibirLinhas(){
        //retorna a lista de props se existir
        const cursos = this.props.cursos || []
        // .map é uma função que percorre uma lista e pode trazer uma nova lista
        return cursos.map(curso => (
            <tr key={curso._id}>
                <td>{curso.codigo}</td>
                <td>{curso.descricao}</td>
            </tr>
        ))
    }

    render() {
        return (
            <div className="border-right pl-3 pr-3" >
                <h3 className="border-bottom">Lista de Cursos</h3>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exibirLinhas()}
                    </tbody>
                </table>
            </div>
        )
    }
}