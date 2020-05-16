import React from 'react';
import styled from "styled-components";
import "./Mensagem.css";

const MensagemEsquerda = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px;
    padding: 10px;
    max-width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
    align-self: flex-start;
`
const MensagemDireita = styled.div`
    background-color: #dcf8c6;
    display: flex;
    flex-direction: column;
    margin: 10px 0 10px;
    padding: 10px;
    max-width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
    align-self: flex-end;
`

const NomeUsuario = styled.p`
    font-weight: bold;
    margin-bottom: 8px;
`
const MensagemUsuario = styled.p`
    width:100%;
    word-wrap: break-word;
`


class Mensagem extends React.Component{
    render() {
        if (this.props.nomeUsuario === "eu") {
            return <MensagemDireita onDoubleClick={this.props.funcaoDeletar}>
                <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
            </MensagemDireita>
        } else {
            return <MensagemEsquerda onDoubleClick={this.props.funcaoDeletar}>
                <NomeUsuario>{this.props.nomeUsuario}</NomeUsuario>
                <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
            </MensagemEsquerda>
        }            
    }
}

export default Mensagem