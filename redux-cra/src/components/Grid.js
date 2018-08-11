import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
// import StackGrid from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
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
            isMobile : this.props.isMobile
        }
        this.createListOfComponents = this.createListOfComponents.bind(this);

    }

    createListOfComponents = () => {
        var sortedComponents = Object.entries(this.state.data);
        var randomizedComponents = sortedComponents.sort(randomize);
        // console.log(typeof(randomizedComponents));
        return randomizedComponents;
    }

    render() {

        console.log("grid")
        const {
            size: {
                width
            }
        } = this.props;
        console.log(this.state.isMobile)

        // let randomList = this.createListOfComponents();

        // let components = randomList.map(([i,a]) => {
        let components = Object.entries(this.state.data).map(([i,a]) => {
            if(a.component === "MyCard") {
                return <MyCard style={{width: '100%'}} key={i} info={a}/>
            }else if (a.component === "MyJumbo"){
                return <MyJumbo style={{width: '100%'}} key={i} info={a}/>
            }else if (a.component === "MyCarousel"){
                return < MyCarousel style={{width: '100%'}} key={i} info={a}/>
            } else {
                return null
            }
        });

        return (


            <div className="Grid-container">
                <StackGrid
                    gridRef={grid => this.grid = grid}
                    gutterWidth={15}
                    columnWidth={(this.state.isMobile) ? '50%' : width <= 430 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))}
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