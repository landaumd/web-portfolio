import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TicTacToe from "./TicTacToe";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation.js';
import MyView from "./components/MyView.js";

class App extends Component {
    constructor(props) {
        super(props);

        // this.toggle = this.toggle.bind(this);
        this.state = {
            rightIsOpen: false,
            listDataFromChild: null
        };
        //
        // console.log(this.state);
    }

    // myCallback = (dataFromChild) => {
    //     this.setState({ listDataFromChild: dataFromChild });
    // }

    handleOpenRight = (openBool) => {
        this.setState({rightIsOpen: openBool});
        this.openRightSide(openBool);
    }

    openRightSide = (openBool) => {
        console.log(openBool);
    }

    render() {
        return (
            <div className="App">
            <Navigation rightIsOpen={this.state.rightIsOpen} onOpenRight={this.handleOpenRight}/>
                {/*<div className='container-fluid'>*/}

                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}
                    {/*<br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/> kjdlkajsd*/}

                        <MyView rightIsOpen={this.state.rightIsOpen} viewOpenRightSide={this.openRightSide} />
                    {/*<div className="App">*/}
                            {/*<header className="App-header">*/}
                              {/*<img src={logo} className="App-logo" alt="logo" />*/}
                              {/*<h1 className="App-title">Welcome to React</h1>*/}
                            {/*</header>*/}
                        {/*<TicTacToe />*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
}

export default App;
