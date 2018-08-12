import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd } from 'react-rnd';
import './MyView.css';
import RightFocus from "./RightFocus";
import {connect} from "react-redux";
import ScrollableAnchor from 'react-scrollable-anchor';


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

        console.log("my view")
        const { width } = this.state;

        this.state.isMobile = width <= 500;


        if (this.state.isMobile) {
            return (
                <div className="row MyView-container">
                    <div style={{width: '100%', paddingBottom : '15px', paddingLeft : '0px', display: `${this.props.displayRight}` }} >
                        <RightFocus isMobile={this.state.isMobile} />
                    </div>
                    <div className="col">
                        <Rnd
                            default={{
                                x: 0,
                                y: 0,
                                width: this.state.leftWidth,
                                height: '100%',
                            }}
                            onResize={(e, direction, ref, delta, position) => {
                                this.setState({
                                    width: ref.offsetWidth,
                                    height: ref.offsetHeight,
                                    ...position,
                                });
                            }}
                            maxWidth={'100%'}
                            minWidth={300}
                            bounds="parent"
                            disableDragging={true}
                            enableResizing={{ top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                        >
                            <Grid isMobile={this.state.isMobile}/>
                        </Rnd>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row no-gutters MyView-container">

                    <div className="col no-gutters">
                        <Rnd
                            default={{
                                x: 0,
                                y: 0,
                                width: this.state.leftWidth,
                                height: '100%',
                            }}
                            onResize={(e, direction, ref, delta, position) => {
                                this.setState({
                                    width: ref.offsetWidth,
                                    height: ref.offsetHeight,
                                    ...position,
                                });
                            }}
                            maxWidth={'calc(100%)'}
                            minWidth={300}
                            bounds="parent"
                            disableDragging={true}
                            enableResizing={{ top:false, right:false, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                        >
                            <Grid isMobile={this.state.isMobile}/>
                        </Rnd>
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