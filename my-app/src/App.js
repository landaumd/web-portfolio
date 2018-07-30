import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from "./TicTacToe";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import Grid from "./components/Grid";

class App extends Component {
  render() {
    return (
        <div>
            <Navigation/>
            <Grid/>
            {/*<div className="App">*/}
                    {/*<header className="App-header">*/}
                      {/*<img src={logo} className="App-logo" alt="logo" />*/}
                      {/*<h1 className="App-title">Welcome to React</h1>*/}
                    {/*</header>*/}
                {/*<TicTacToe />*/}
            {/*</div>*/}
        </div>
    );
  }
}

export default App;
