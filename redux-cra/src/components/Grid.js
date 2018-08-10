import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
import { Line, Circle } from 'rc-progress';
import MyProgressBar from './MyProgressBar';
const { scaleDown } = transitions;



// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo

function randomize(a, b) {
    return Math.random() - 0.5;
}

class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : cardTest,
        }
        this.createListOfComponents = this.createListOfComponents.bind(this);
    }

    componentDidUpdate = () => {
        this.grid.updateLayout();
    }

    createListOfComponents = () => {
        var sortedComponents = Object.entries(this.state.data);
        var randomizedComponents = sortedComponents.sort(randomize);
        // console.log(typeof(randomizedComponents));
        return randomizedComponents;
    }

    render() {
        const {
            size: {
                width
            }
        } = this.props;

        let randomList = this.createListOfComponents();

        let components = randomList.map(([i,a]) => {
            if(a.component=== "MyCard") {
                return <MyCard key={i} info={a}/>
            }else if (a.component === "MyJumbo"){
                return <MyJumbo key={i} info={a}/>
            }else if (a.component === "MyCarousel"){
                return < MyCarousel key={i} info={a}/>
            }
            // else if (a.component === "MyProgressBar"){
            //     return <MyProgressBar  key={i} info={a}/>
            //
            // }
        });

        return (
            <div className="Grid-container">
                <StackGrid
                    gridRef={grid => this.grid = grid}
                    gutterWidth={15}
                    columnWidth={width <= 400 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))}
                    gutterHeight={15}
                    enter={scaleDown.enter}
                    monitorImagesLoaded={true}
                >
                    {components}


                    {/*< MyCard title={this.state.title} subtitle={this.state.subtitle} bodyText={this.state.bodyText} imageSource={this.state.imageSource}/>*/}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);