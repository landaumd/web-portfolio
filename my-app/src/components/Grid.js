import React, { Component } from "react";
// import StackGrid from "react-stack-grid";
import './Grid.css';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';

import StackGrid, { transitions } from "react-stack-grid";

const { scaleDown } = transitions;

// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo

class Grid extends Component {
    render() {
        return (
            <div className="Grid-top">
                <StackGrid
                    // style={{'background-color': 'red'}}
                    // style={{'padding-top': '20rem}}
                    columnWidth={300}
                    gutterWidth={15}
                    gutterHeight={15}
                    enter={scaleDown.enter}
                    monitorImagesLoaded={true}
                    // horizontal={true}
                    // rtl={true}
                >
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyJumbo />
                    <MyJumbo />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    <MyCard />
                    {/*<div>*/}
                    {/*<div key="key1">Item 1</div>*/}
                    {/*<div key="key2">Item 2</div>*/}
                    {/*<div key="key3">Item 3</div>*/}
                    {/*</div>*/}
                </StackGrid>
            </div>
        );
    }
}

export default Grid;