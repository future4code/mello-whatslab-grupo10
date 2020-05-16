import React from 'react';
import './App.css';
import styled from "styled-components";
import Mensagem from "./components/Mensagem/Mensagem";

const MainLayout = styled.div`
  display: grid;
  margin: auto;
  border: 1px solid black;
  background-color: #e5ddd5;
  width: 40vw;
  height: 90vh;
  padding-bottom: 5px;
  grid-column-gap: 10px;
  grid-template-columns: 20% 1fr 15%;
  grid-template-rows: 1fr 40px;
  grid-template-areas:
  "lista lista lista"
  "user  msg   enviar";
`

const ListaMensagens = styled.div`
  padding: 20px;
  grid-area: lista;
`

const InputUser = styled.input`
  border-radius: 5px;
  margin-left: 10px;
  border-style: none;
  padding-left: 5px;
  grid-area: user;
`

const InputMsg = styled.input`
  border-radius: 5px;
  border-style: none;
  padding-left: 5px;
  grid-area: msg;
`

const BotaoEnviar = styled.button`
  border-radius: 5px;
  margin-right:10px;
  border-style: none;
  font-weight: bold;
  grid-area: enviar;
`

class App extends React.Component {
  state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  enviarMensagem = () => {
    const novaMensagem = {
      nomeUsuario: this.state.valorInputUsuario,
      valorMensagem: this.state.valorInputMensagem,
    };

    const novoMensagens = [...this.state.mensagens, novaMensagem];
      
    this.setState({
      mensagens: novoMensagens,
      valorInputUsuario: "",
      valorInputMensagem: "",
    });
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  render(){

    const listaMensgens = this.state.mensagens.map(mensagem => {
      return <Mensagem
                nomeUsuario={mensagem.nomeUsuario}
                valorMensagem={mensagem.valorMensagem}
              />
    })

    return (
      <MainLayout>
        <ListaMensagens>{listaMensgens}</ListaMensagens>
        <InputUser placeholder='Usuário' value={this.state.valorInputUsuario} onChange={this.onChangeInputUsuario}/>
        <InputMsg placeholder='Mensagem' value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem}/>
        <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
      </MainLayout>
    );
  }
}

export default App;
