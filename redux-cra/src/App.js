import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MyView from "./components/MyView.js";

//have to install:
// react-rnd (npm i -S react-rnd),
// react-strap (npm install --save reactstrap react react-dom),
// react-stack grid (npm install react-stack-grid)
// bootstrap:   npm install bootstrap --save
//              npm install --save reactstrap react react-dom

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (

            <div className="App">
                <Navigation />
                <div>
                    <MyView />
                </div>
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        originAmount: state.originAmount,
        rightIsOpen: state.rightIsOpen,
        displayRight: state.displayRight
    }

})(App);