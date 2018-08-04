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

    }

    handleOpenRight = (openBool) => {
        // console.log("handle open right");
        this.setState({rightIsOpen: openBool});
        this.openRightSide(openBool);

    }

    openRightSide = (openBool) => {
        // console.log("open right side");
        // console.log("open bool? = " + openBool);
        this.state.rightIsOpen = openBool;
        let mapPoint = this.getMapPoint(this.state.rightIsOpen);
        console.log("Right is open? = " + mapPoint);
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
                    <div>
                        <MyView
                            // rightIsOpen={this.state.rightIsOpen}
                            getCurrentPoint={getMapPoint => {this.getMapPoint = getMapPoint}}
                         />
                    </div>
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
