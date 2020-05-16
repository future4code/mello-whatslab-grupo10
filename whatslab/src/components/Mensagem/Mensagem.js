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
`
const MensagemDireita = styled.div`
    background-color: #dcf8c6;
    margin: 10px 0 10px 0;
    padding: 10px;
    max-width: 40%;
    border-radius: 5px;
    box-shadow: 0 1px 1px rgb(0, 0, 0, 0.4);
    align-self: flex-end;
`

const NomeUsuario = styled.p`
    font-weight: bold;
    margin-bottom: 5px;
`
const MensagemUsuario = styled.p`
    word-wrap: break-word;
`
const HoraMensagem = styled.div`
    font-size: 10px;
    margin-top: 3px;
    display: flex;
    justify-content: flex-end;
`


class Mensagem extends React.Component{
    render() {
        function pad(numeroRelogio) {
            if (numeroRelogio < 10) {
                return "0" + numeroRelogio
            } else {
                return numeroRelogio
            }
        }

        let data = new Date()
        let horaMensagem = [data.getHours(), data.getMinutes()].map(pad).join(":")

        if (this.props.nomeUsuario === "eu") {
            return <MensagemDireita onDoubleClick={this.props.funcaoDeletar}>
                <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
                <HoraMensagem>{horaMensagem}</HoraMensagem>
            </MensagemDireita>
        } else {
            return <MensagemEsquerda onDoubleClick={this.props.funcaoDeletar}>
                <NomeUsuario>{this.props.nomeUsuario}</NomeUsuario>
                <MensagemUsuario>{this.props.valorMensagem}</MensagemUsuario>
                <HoraMensagem>{horaMensagem}</HoraMensagem>
            </MensagemEsquerda>
        }            
    }
}    


export default Mensagem

