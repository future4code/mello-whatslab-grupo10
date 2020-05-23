import React from 'react';
import styled from "styled-components";
import "./Mensagem.css";

const MensagemEsquerda = styled.div`
    background-color: white;
    margin: 10px 0 10px 0;
    padding: 10px;
    max-width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
    align-self: flex-start;
    cursor: pointer;
`
const MensagemDireita = styled.div`
    background-color: #dcf8c6;
    margin: 10px 0 10px 0;
    padding: 10px;
    max-width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
    align-self: flex-end;
    cursor: pointer;
`

const IconeDeletar = styled.p`
    display:inline;
`

const NomeUsuario = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`
const MensagemUsuario = styled.p`
    word-wrap: break-word;
    display: inline;
`
const HoraMensagem = styled.p`
    font-size: 10px;
    margin-top: 3px;
    text-align: right;
`


class Mensagem extends React.Component{
    render() {
        if (this.props.nomeUsuario.toLowerCase() === "eu") {
            return <MensagemDireita onDoubleClick={this.props.funcaoDeletar}>
                        <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
                        <HoraMensagem>{this.props.horario}<IconeDeletar onClick={this.props.funcaoDeletar}> ❌</IconeDeletar></HoraMensagem>
                        
                   </MensagemDireita>
        } else {
            return <MensagemEsquerda onDoubleClick={this.props.funcaoDeletar}>
                        <NomeUsuario>{this.props.nomeUsuario}</NomeUsuario>
                        <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
                        <HoraMensagem>{this.props.horario}<IconeDeletar onClick={this.props.funcaoDeletar}> ❌</IconeDeletar></HoraMensagem>
                   </MensagemEsquerda>
        }            
    }
}

export default Mensagem