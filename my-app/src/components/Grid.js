import React, { Component } from "react";
// import StackGrid from "react-stack-grid";
import './Grid.css';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import Collapsible from './Collapsible.js';
import StackGrid, { transitions } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
import RightFocus from './RightFocus.js';
import ReactDOM from "react-dom";
const { scaleDown } = transitions;

// const items = [];

let items = [{title:'hello'}, {title:'world'}];

// const pics = [{
//     one: {id: 1, type: MyCard}
// }]

// for (let i = 0; i < 30; i += 1) {
//     const id = Math.random().toString(36).substr(2, 9);
//     const height = Math.floor((Math.random() * (300 - 80)) + 80);
//
//     items.push({
//         id,
//         height,
//         active: false,
//         actualHeight: height
//     });
// }

// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo

class Grid extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items
        };

        // this.grid = React.createRef();
    }

    // changeItemSize = (id) => {
    //     this.setState({
    //         items: this.state.items.map(o => (
    //             o.id !== id ? o : {
    //                 ...o,
    //                 active: !o.active,
    //                 height: !o.active ? o.height * 1.5 : o.actualHeight,
    //             }
    //         )),
    //     }, () => {
    //         this.grid.updateLayout();
    //     });
    //     console.log("grrrr");
    // };

    componentDidUpdate = () => {
        this.grid.updateLayout();
    }

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

                        < MyCard/>
                        < MyCard />
                        < MyCarousel/>
                        < MyCard />
                        < MyJumbo />
                        < MyJumbo />
                        < MyCarousel/>
                        < MyCard />
                        {/*< Collapsible key={1} onClick={() => this.changeItemSize(0)}/>*/}
                        < MyCard />
                        < MyCard />
                        < MyCarousel/>


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