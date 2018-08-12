import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
import {connect} from "react-redux";

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

        var {category} = this.props

        this.createListOfComponents = this.createListOfComponents.bind(this);
    }

    createListOfComponents = () => {
        var sortedComponents = Object.entries(this.state.data);
        var randomizedComponents = sortedComponents.sort(randomize);
        // console.log(typeof(randomizedComponents));
        return randomizedComponents;
    }

    something = () => {
        this.grid.updateLayout();
    };

    render() {
        console.log("render")

        const {
            size: {
                width
            }
        } = this.props;
        console.log(this.state.isMobile)

        console.log(this.props.idsWithCategory)
        console.log(this.props.category)



        // let randomList = this.createListOfComponents();

        var components
        // let components = randomList.map(([i,a]) => {
        if (this.props.idsWithCategory != null) {
            components = Object.entries(this.state.data).map(([i, a]) => {
                console.log("filtering by " + this.props.category)
                if (this.props.idsWithCategory.includes(a.myJSONid)) {
                    if (a.component === "MyCard") {
                        return <MyCard style={{width: '100%'}} key={i} info={a}/>
                    } else if (a.component === "MyJumbo") {
                        return <MyJumbo style={{width: '100%'}} key={i} info={a}/>
                    } else if (a.component === "MyCarousel") {
                        return < MyCarousel style={{width: '100%'}} key={i} info={a}/>
                    } else {
                        return null
                    }
                }
            });
        } else {
            components = Object.entries(this.state.data).map(([i, a]) => {
                console.log("not filtered")

                if (a.component === "MyCard") {
                    return <MyCard style={{width: '100%'}} key={i} info={a}/>
                } else if (a.component === "MyJumbo") {
                    return <MyJumbo style={{width: '100%'}} key={i} info={a}/>
                } else if (a.component === "MyCarousel") {
                    return < MyCarousel style={{width: '100%'}} key={i} info={a}/>
                } else {
                    return null
                }
            });
        }

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

export default sizeMe()(connect((state, props) => {
    return {
        ...state
    }
})(Grid));