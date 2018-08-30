import React, { Component } from "react";
import '../css/Grid.css';
import PhillContent from '../config/PhillContent.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions, easings } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';

// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo

class Grid extends Component {
    constructor(props) {
        super(props);

        const items = this.props.idsWithCategory;

        this.state = {
            data: PhillContent,
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
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps === nextState)
        return nextProps === nextState
    }

    render() {

        console.log("grid render")

        const {
            duration,
            gutter,
            easing,
            transition: transitionSelect,
        } = this.state;

        let w;
        if (this.state.isTINYMobile){
            w = 250
        } else {
            w = 300
        }

        const transition = transitions[transitionSelect];

        let components;
        if (this.props.idsWithCategory !== undefined) { // list with ids has been created
            components = Object.entries(this.state.data).map(([i, a]) => {
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
        } else { // if search has not run yet -> list of ids is not created yet
            components = Object.entries(this.state.data).map(([i, a]) => {
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
                monitorImagesLoaded={true}
                >
                    {components}
                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);