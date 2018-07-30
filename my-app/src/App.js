import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Grid from "./Grid";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';

class App extends Component {
  render() {
    return (
        <div>

            <Navigation/>

            <div className="App">
                <header className="App-header">
                  <img src={logo} className="App-logo" alt="logo" />
                  <h1 className="App-title">Welcome to React</h1>
                </header>
            <Grid />
          </div>
        </div>
    );
  }
}

export default App;
