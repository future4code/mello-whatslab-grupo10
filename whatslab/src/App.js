import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import Mensagem from "./components/Mensagem/Mensagem";

const MainLayout = styled.div`
  display: grid;
  margin: auto;
  margin-top: 20px;
  width: 50vw;
  height: 90vh;
  grid-template-columns: 20% 1fr 10%;
  grid-template-rows: 1fr 25px;
  grid-template-areas:
  "lista lista lista"
  "user  msg   enviar";
`

const ListaMensagens = styled.div`
  border: 1px solid red;
  grid-area: lista;
`

const InputUser = styled.input`
  border: 1px solid black;
  padding-left: 5px;
  grid-area: user;
`

const InputMsg = styled.input`
  border: 1px solid blue;
  padding-left: 5px;
  grid-area: msg;
`

const BotaoEnviar = styled.button`
  border: 1px solid green;
  grid-area: enviar;
`

class App extends React.Component {
  state = {
    mensagens: [
      {
        nomeUsuario: "renan",
        valorMensagem: "bla bli blu",
      }
    ],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      valorMensagem: this.state.valorInputMensagem,
    };

    const novoMensagens = [...this.state.mensagens, novoMensagens];
      
    this.setState({
      mensagens: novoMensagens,
      valorInputUsuario: "",
      valorInputMensagem: "",
    });
  };

  render(){
    return (
      <MainLayout>
      <ListaMensagens>

      </ListaMensagens>
      <InputUser placeholder='Usuário'/>
      <InputMsg placeholder='Mensagem'/>
      <BotaoEnviar>Enviar</BotaoEnviar>
      </MainLayout>
    );
  }
}

export default App;
