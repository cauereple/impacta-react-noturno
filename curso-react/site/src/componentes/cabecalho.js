import React from 'react'

export class Cabecalho extends React.Component {
    render() {

        
        const {titulo, subtitulo} = this.props // Destructor

        return (
            <header className="pb-2 mt-4 mb-2 border-bottom">
                <h2><strong>{this.props.titulo}</strong> -
                <small>{this.props.subtitulo}</small></h2>
            </header>
        )
    }
}