import React, { Component } from 'react';
import Holder from 'react-holder-component';
import Navigation from "./Navigation.js";
import Card from './Card.js';

class App extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <div className="container-fluid pad-top">
                    <div className="row">
                        <div className="col-md-3">
                            <Card />
                        </div>
                        <div className="col-md-3">
                            <Card />
                        </div>
                        <div className="col-md-3">
                            <Card />
                        </div>
                        <div className="col-md-3">
                            <Card />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;