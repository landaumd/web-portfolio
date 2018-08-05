import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MyView from "./components/MyView.js";

import {
    Button,
 } from 'reactstrap';


//have to install:
// react-rnd (npm i -S react-rnd),
// react-strap (npm install --save reactstrap react react-dom),
// react-stack grid (npm install react-stack-grid)
// bootstrap:   npm install bootstrap --save
//              npm install --save reactstrap react react-dom


// Redux source: https://medium.com/backticks-tildes/setting-up-a-redux-project-with-create-react-app-e363ab2329b8

class App extends Component {

    simpleAction = (event) => {
        console.log(this.props);
        this.props.simpleAction();
    }

    render() {
        return (

            <div className="App">
                <Navigation />
                {/*<div className='container-fluid'>*/}
                <br/>
                <br/>
                <br/>

                <Button onClick={this.simpleAction}>Test redux action</Button>
                <pre>
                 {
                     JSON.stringify(this.props)
                 }
                </pre>

                <div>
                    <MyView />
                </div>
            </div>
        );
    }
}

// The mapStateToProps parameter of connect allows the React component to subscribe to redux state updates.
const mapStateToProps = state => ({
    rightIsOpen: false,
    ...state,
});

// The mapDispatchToProps parameter of connect can either be:
//
//    1. an object of action creators wrapped into a dispatch.
//    2. a function with a dispatch parameter. The function should return an object
//     that uses dispatch to bind action creators. Alternatively, you can use the
//     bindActionCreators() helper from redux

const mapDispatchToProps = dispatch => ({
    simpleAction: () => dispatch(simpleAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);


// <div className="App">
//     <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//         To get started, edit <code>src/App.js</code> and save to reload
//     </p>
//
//     <button onClick={this.simpleAction}>Test redux action</button>
//     <pre>
//      {
//          JSON.stringify(this.props)
//      }
//     </pre>
// </div>