import React, { Component } from 'react';
import './App.css';
import LoginForm from './LoginForm/LoginForm';
import PokeIndex from './PokeIndex/PokeIndex';

class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      username: null
    }
  }
  handleLogin = (formData) => {
    this.setState({
      loggedIn: true,
      username: formData.username
    })
  }

  render(){
    return (
      <div className="App">
        <h1>PokeDex App</h1>
        {
          this.state.loggedIn ?
          <PokeIndex username={this.state.username}></PokeIndex>
          :
          <LoginForm handleLogin={this.handleLogin}></LoginForm>
        }
      </div>
    );
  }
}

export default App;
