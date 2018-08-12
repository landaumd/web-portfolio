import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd } from 'react-rnd';
import './MyView.css';
import RightFocus from "./RightFocus";
import {connect} from "react-redux";

class MyView extends  Component {
    constructor(props) {
        super(props);

        var { rightIsOpen } = this.props;

        // this.onRightOpen = props.viewOpenRightSide(props.rightIsOpen).bind(this);
        this.state = {
            rightIsOpen: rightIsOpen,
            leftWidth: '100%',
            display: 'none',
            width: window.innerWidth,
            isMobile : false,
        };

    }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    // make sure to remove the listener
    // when the component is not mounted anymore
    // https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {

        console.log("view")
        const { width } = this.state;

        this.state.isMobile = width <= 500;

        // (this.state.isMobile) ? '50%' : width <= 430 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))
        var colWidth;
        if (this.state.isMobile){
            colWidth = "50%"
        } else if (width <= 430){
            colWidth = '100%'
        } else if (width <= 650){
            colWidth = '50%'
        } else if (width <= 950){
            colWidth = '33%'
        } else {
            colWidth = '25%'
        }
        console.log("width " + width)
        console.log("col width " + colWidth)

        console.log(this.props.idsWithCategory)

        if (this.state.isMobile) {
            return (
                <div className="row no-gutters MyView-container">
                    <div style={{width: '100%', paddingBottom : '15px', paddingLeft : '0px', display: `${this.props.displayRight}` }} >
                        <RightFocus isMobile={this.state.isMobile} />
                    </div>
                    <div className="col no-gutters">
                        <Grid colWidth={colWidth} idsWithCategory={this.props.idsWithCategory} isMobile={this.state.isMobile}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row no-gutters MyView-container">

                    <div className="col no-gutters">
                        <Grid colWidth={colWidth} style={{minWidth: '300px'}} idsWithCategory={this.props.idsWithCategory} isMobile={this.state.isMobile}/>
                    </div>
                    <div style={{width: 'calc(100% - 300px)', paddingBottom : '15px', paddingLeft : '15px', display: `${this.props.displayRight}` }} >
                        <RightFocus isMobile={this.state.isMobile} />
                    </div>
                </div>

            );
        }
    }
}

export default connect((state, props) => {
    return {
        ...state
    }
})(MyView);