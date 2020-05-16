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
  grid-template-rows: 1fr 30px;
  grid-template-areas:
  "lista lista lista"
  "user  msg   enviar";
`

const ListaMensagens = styled.div`
  border: 2px solid black;
  grid-area: lista;
`

const InputUser = styled.input`
  padding-left: 5px;
  grid-area: user;
`

const InputMsg = styled.input`
  padding-left: 5px;
  grid-area: msg;
`

const BotaoEnviar = styled.button`
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
      key: Date.now(),
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

  deletarMensagem = (key) => {
    const novoMensagens = this.state.mensagens.filter( mensagem => mensagem.key !== key )
    this.setState({mensagens: novoMensagens})
  }

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onKeyPressInputMensagem = (event) => {
    if (event.key === "Enter" || (event.keyCode || event.which) === 13){
      this.enviarMensagem();
    }
  };

  render(){

    const listaMensgens = this.state.mensagens.map(mensagem => {
      return <Mensagem
                key={mensagem.key}
                nomeUsuario={mensagem.nomeUsuario}
                valorMensagem={mensagem.valorMensagem}
                funcaoDeletar={()=>{this.deletarMensagem(mensagem.key)}}
              />
    })

    return (
      <MainLayout>
      <ListaMensagens>{listaMensgens}</ListaMensagens>
      <InputUser placeholder='Usuário' value={this.state.valorInputUsuario} onChange={this.onChangeInputUsuario}/>
      <InputMsg placeholder='Mensagem' onKeyPress={this.onKeyPressInputMensagem} value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem}/>
      <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
      </MainLayout>
    );
  }
}

export default App;
