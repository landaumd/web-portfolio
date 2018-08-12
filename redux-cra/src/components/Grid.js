import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions, easings } from "react-stack-grid";
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

        const items = this.props.idsWithCategory;
        console.log("items")
        const mobileBool = this.props.isMobile

        // var w = 300
        // if w =

        // let colWidth;
        // if (mobileBool){
        //     colWidth = "50%"
        // } else if (this.props.width <= 430){
        //     colWidth = '100%'
        // } else if (this.props.width <= 650){
        //     colWidth = '50%'
        // } else if (this.props.width <= 950){
        //     colWidth = '33%'
        // } else {
        //     colWidth = '25%'
        // }

        // (this.state.isMobile) ? '50%' : width <= 430 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))
        // var w;
        // if (this.props.isMobile){
        //     w = window.innerWidth
        // } else {
        //     let winInWidth = window.innerWidth;
        //     if (winInWidth <= 650){
        //         w = winInWidth/2
        //     } else if (winInWidth <= 950){
        //         w = winInWidth/3
        //     } else {
        //         w = winInWidth/4
        //     }
        // }

        this.state = {
            data: cardTest,
            isMobile: this.props.isMobile,
            isTINYMobile: this.props.isTINYMobile,
            idsWithCategory: this.props.idsWithCategory,
            items,
            duration: 480,
            columnWidth: 300,
            gutter: 15,
            easing: easings.quartOut,
            transition: 'fadeDown',
        }
        console.log("is tiny mobile? " + this.state.isTINYMobile);
    }

    render() {
        console.log("render")

        // const {
        //     size: {
        //         width
        //     }
        // } = this.props;

        const {
            // items,
            duration,
            columnWidth,
            gutter,
            easing,
            transition: transitionSelect,
        } = this.state;

        var w;
        if (this.state.isTINYMobile){
            w = 250
        } else {
            w = 300
        }

        const transition = transitions[transitionSelect];

        console.log(this.state.isMobile);

        console.log(this.props.idsWithCategory);
        console.log(this.props.category);

        let components;
        if (this.props.idsWithCategory !== undefined) {
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

        // let width = ((this.state.isMobile) ? '50%' : width <= 430 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))

        return (
            <div className="Grid-container">
            <StackGrid
                    // gridRef={grid => this.grid = grid}
                    // gutterWidth={15}
                    // columnWidth={(this.state.isMobile) ? '50%' : width <= 430 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))}
                    // gutterHeight={15}
                    // enter={scaleDown.enter}
                    // monitorImagesLoaded={true}
                // horizontal
                duration={duration}
                columnWidth={w}
                gutterWidth={gutter}
                gutterHeight={gutter}
                easing={easing}
                appear={transition.appear}
                appeared={transition.appeared}
                enter={transition.enter}
                entered={transition.entered}
                leaved={transition.leaved}
                // onLayout={() => {
                //     console.log('[DEMO] `onLayout()` has been called.'); // eslint-disable-line
                // }}
                monitorImagesLoaded={true}
                >
                    {components}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);