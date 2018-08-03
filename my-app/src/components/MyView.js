import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd, size, position } from 'react-rnd';
import './MyView.css';

// https://github.com/bokuweb/react-rnd

class MyView extends  Component {
    constructor(props) {
        super(props);

        // this.onRightOpen = props.viewOpenRightSide(props.rightIsOpen).bind(this);
        this.state = {
            rightIsOpen: props.rightIsOpen,
            leftWidth: '100%',
        };
        // console.log(this.state);
    }

    // someFn = () => {
    //     // [...somewhere in here I define a variable listInfo which    I think will be useful as data in my ToDoList component...]
    //     // this.props.callbackFromParent(listInfo);
    // }

    update() {
        console.log("updating");
        this.rnd.updatePosition({ x: 200, y: 300 });
    }

    render() {
        return (
            <div className="MyView-container">
                <div>
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
                        console.log(this.state.rightIsOpen);
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

                <div className="float-right text-center w-50" style={{backgroundColor:'pink',}}>
                    Some text here
                </div>

            </div>
        );
    }
}

export default MyView;