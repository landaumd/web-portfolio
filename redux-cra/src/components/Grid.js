import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
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
        this.state = {
            data : cardTest,
        }
    }

    componentDidUpdate = () => {
        this.grid.updateLayout();
    }

    render() {
        const {
            size: {
                width
            }
        } = this.props;

        let components = Object.entries(this.state.data).map(([i,a]) => {

            if(a.component=== "MyCard") {
                return <MyCard key={a.myJSONid} info={a}/>

            }else if (a.component === "MyJumbo"){
                return <MyJumbo key={a.myJSONid} info={a}/>

            }else if (a.component === "MyCarousel"){
                return <MyCarousel key={a.myJSONid} info={a}/>
            }
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