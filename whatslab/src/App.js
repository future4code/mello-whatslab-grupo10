import React from 'react';
import './App.css';
import styled from "styled-components";
import background from './img/space.jpg';
import Mensagem from "./components/Mensagem/Mensagem";

const MainLayout = styled.div`
  display: grid;
  margin: auto;
  border: 1px solid black;
  background-image: url(${background});
  background-size: no-repeat;
  background-color: #e5ddd5;
  width: 45vw;
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
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: auto;
`

const InputUser = styled.input`
  border-radius: 5px;
  margin-left: 10px;
  border-style: none;
  padding-left: 5px;
  grid-area: user;
  &:focus {
      outline: none;
  }
`

const InputMsg = styled.input`
  border-radius: 5px;
  border-style: none;
  padding-left: 5px;
  grid-area: msg;
  &:focus {
      outline: none;
  }
`

const BotaoEnviar = styled.button`
  border-radius: 5px;
  margin-right:10px;
  border-style: none;
  font-weight: bold;
  grid-area: enviar;
  &:focus {
      outline: none;
  }
`

class App extends React.Component {
  state = {
    mensagens: [],
    valorInputUsuario: "",
    valorInputMensagem: "",
  };

  enviarMensagem = () => {
    const data = new Date();

    const novaMensagem = {
      id: data.getTime(),
      nomeUsuario: this.state.valorInputUsuario,
      valorMensagem: this.state.valorInputMensagem,
      horario: `${this.formatarHorario(data)}`,
    };

    const novoMensagens = [...this.state.mensagens, novaMensagem];

    this.setState({
      mensagens: novoMensagens,
      valorInputMensagem: "",
    });
  };

  deletarMensagem = (id) => {
    if (window.confirm('Deseja mesmo apagar a mensagem ?')) {
      const novoMensagens = this.state.mensagens.filter(mensagem => mensagem.id !== id)
      this.setState({ mensagens: novoMensagens })
    }
  };

  formatarHorario = (data) => {
    const horas = data.getHours();
    const minutos = data.getMinutes();
    return `${ horas > 12 ? (horas - 12) : horas }:${ minutos < 10 ? ('0' + minutos) : minutos } ${ horas > 12 ? 'PM' : 'AM'}`
  };

  onChangeInputUsuario = (event) => {
    this.setState({ valorInputUsuario: event.target.value });
  };

  onChangeInputMensagem = (event) => {
    this.setState({ valorInputMensagem: event.target.value });
  };

  onKeyPressInputMensagem = (event) => {
    if (event.key === "Enter" || (event.which === 13)) {
      this.enviarMensagem();
    }
  };

  render() {
    const listaMensagens = this.state.mensagens.map(mensagem => {
      return <Mensagem
                key={mensagem.id}
                nomeUsuario={mensagem.nomeUsuario}
                valorMensagem={mensagem.valorMensagem}
                funcaoDeletar={() => { this.deletarMensagem(mensagem.id) }}
                horario={mensagem.horario}
              />
    });

    return (
      <MainLayout>
        <ListaMensagens>{listaMensagens}</ListaMensagens>
        <InputUser placeholder='Usuário' value={this.state.valorInputUsuario} onChange={this.onChangeInputUsuario} />
        <InputMsg placeholder='Mensagem' value={this.state.valorInputMensagem} onChange={this.onChangeInputMensagem} onKeyPress={this.onKeyPressInputMensagem} />
        <BotaoEnviar onClick={this.enviarMensagem}>Enviar</BotaoEnviar>
      </MainLayout>
    )
  }
}

export default App;