import React from 'react'
import styled from "styled-components";

class Mensagem extends React.Component{
    render(){
    return <p><b>{this.props.nomeUsuario}</b>:{this.props.valorMensagem}</p>
    }
}

export default Mensagem