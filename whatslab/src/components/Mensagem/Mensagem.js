import React from 'react';
import styled from "styled-components";
import "./Mensagem.css";

const Mensagem

class Mensagem extends React.Component{
    render(){
    return <p onDoubleClick={this.props.funcaoDeletar}><b>{this.props.nomeUsuario}</b>: {this.props.valorMensagem}</p>
    }
}

export default Mensagem