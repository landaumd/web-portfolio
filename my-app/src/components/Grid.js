import test from './data.json';
import React, { Component } from "react";
import './Grid.css';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
const { scaleDown } = transitions;

// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo

class Grid extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //
        // };
        this.elem = test;

        this.arr = [];
        Object.keys(this.elem).forEach(function(key) {
            this.arr.push(test[key]);
        });

    }

    componentDidUpdate = () => {
        this.grid.updateLayout();
    }

    // getNumbers() {
    //     if (this.elem) {
    //         return Object.keys(this.elem).map( (key) => {
    //             return <p>{key} => {this.elem[key]}</p>;
    //         });
    //     } else {
    //         return <p>data is not available</p>;
    //     }
    // }

    render() {

        const {
            size: {
                width
            }
        } = this.props;

        return (
            <div className="Grid-container">
                <StackGrid
                    // ref={this.grid}
                    gridRef={grid => this.grid = grid}
                    //style={{'background-color': 'red'}}
                    // style={{'padding-top': '20rem}}
                    // columnWidth={300}
                    gutterWidth={15}
                    columnWidth={width <= 400 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))}
                    gutterHeight={15}
                    enter={scaleDown.enter}
                    monitorImagesLoaded={true}
                    // horizontal={true}
                    // rtl={true}

                >

                    {/*{this.state.items.map(({ id, active, height }) => (*/}
                    {/*{this.state.items.map(({item}) => (*/}
                        {/*<span*/}
                            {/*{*/}
                                {/*React.cloneElement(*/}
                                    {/*MyCard,*/}
                                    {/*{title: item.title}*/}
                                {/*)*/}
                            {/*}*/}
                            {/*// key={id}*/}
                            {/*// style={{*/}
                            {/*//     transition: 'background 200ms ease-out',*/}
                            {/*//     background: active ? '#c9cae3' : '#dfe0df',*/}
                            {/*//     height,*/}
                            {/*// }}*/}
                            {/*// onClick={() => this.changeItemSize(id)}*/}
                        {/*/>*/}
                    {/*))}*/}

                    <ul>{this.arr.map(item => <MyCard key={item.label} label={item.label} value={item.value} />)}</ul>;

                    {/*{Object.keys(this.elem).map((v, i) => <li key={i}> {v} {test[v]} </li> )}*/}

                    {/*{ this.elem.map((item, index) => { return <MyCard {... item}/> }) }*/}


                    {/*< MyCard/>*/}
                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*/!*< Collapsible key={1} onClick={() => this.changeItemSize(0)}/>*!/*/}
                        {/*< MyCard />*/}
                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}
                    {/*<ul>*/}
                        {/*{Object.keys(this.elem).map((v, i) => <li key={i}> {v} {this.elem[v]} </li> )}*/}
                    {/*</ul>*/}

                    {/*<div>*/
                    /*<div key="key1">Item 1</div>*/
                    /*<div key="key2">Item 2</div>*/
                    /*<div key="key3">Item 3</div>*/
                    /*</div>*/}

                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);