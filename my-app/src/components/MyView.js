import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd, size, position } from 'react-rnd';
import './MyView.css';
import RightFocus from "./RightFocus";
import './RightFocus.css';

// https://github.com/bokuweb/react-rnd

class MyView extends  Component {
    constructor(props) {
        super(props);

        // this.onRightOpen = props.viewOpenRightSide(props.rightIsOpen).bind(this);
        this.state = {
            rightIsOpen: null,
            leftWidth: '100%',
            display: 'none',
        };
        // console.log(this.state);

        if (props.getCurrentPoint){
            props.getCurrentPoint(this.getMapPoint.bind(this));
        }
    }

    getMapPoint(bool){
        // console.log("bool = " + bool)
        // console.log("props - " + this.props.rightIsOpen)
        this.state.rightIsOpen = bool;
        // console.log("2 - " + this.state.rightIsOpen)
        // console.log("get map point")
        if (this.state.rightIsOpen){
            this.state.display = "table-column";

        } else {
            this.state.display = "none";
        }
        return this.state.rightIsOpen;
    }


    render() {
        return (
            <div className="row MyView-container">
                <div className="col">
                <Rnd
                    default={{
                        x: 0,
                        y: 0,
                        width: this.state.leftWidth,
                        height: '100%',
                    }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
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
                    enableResizing={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                    // style={{backgroundColor: 'red'}}
                >
                    <Grid />
                </Rnd>
            </div>

                {/*<div className="col text-center w-50" style={{backgroundColor:'pink',}}>*/}
                    {/*Some text here*/}
                {/*</div>*/}
                <RightFocus/>

            </div>
        );
    }
}

export default MyView;