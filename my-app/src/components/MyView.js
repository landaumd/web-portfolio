import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd, size, position } from 'react-rnd';
import './MyView.css';

// https://github.com/bokuweb/react-rnd

class MyView extends  Component {

    update() {
        console.log("updating");
        this.rnd.updatePosition({ x: 200, y: 300 });
    }

    render() {
        return (
            <div className="MyView-container"
                style={{
                    width: '100%',
                    height: '400px',
                }}
                >
                <Rnd
                    default={{
                        x: 0,
                        y: 0,
                        width: '100%',
                        height: 190,
                    }}
                    onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                    onResize={(e, direction, ref, delta, position) => {
                        this.setState({
                            width: ref.offsetWidth,
                            height: ref.offsetHeight,
                            ...position,
                        });
                    }}
                    maxWidth={'calc(100% - 15px)'}
                    minWidth={300}
                    bounds="parent"
                    disableDragging={true}
                    enableResizing={{ top:false, right:true, bottom:false, left:false, topRight:false, bottomRight:false, bottomLeft:false, topLeft:false }}
                >
                    <Grid />
                </Rnd>
            </div>
        );
    }
}

export default MyView;