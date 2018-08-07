import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd, size, position } from 'react-rnd';
import './MyView.css';
import RightFocus from "./RightFocus";
import {connect} from "react-redux";
// import './RightFocus.css';
import ReactDOM from 'react-dom';
import {
    Button,
} from 'reactstrap';
// https://github.com/bokuweb/react-rnd

class MyView extends  Component {
    constructor(props) {
        super(props);

        var { rightIsOpen } = this.props;

        // this.onRightOpen = props.viewOpenRightSide(props.rightIsOpen).bind(this);
        this.state = {
            rightIsOpen: rightIsOpen,
            leftWidth: '100%',
            display: 'none',
        };
        // console.log(this.state);

        if (props.getCurrentPoint){
            props.getCurrentPoint(this.getMapPoint.bind(this));
        }

        // this.rf = React.createRef();

        this.getMapPoint = this.getMapPoint.bind(this);
        this.simpleAction = this.simpleAction.bind(this);

    }

    componentDidMount(){
        // let styleString = "width: calc(100%-300px); display: " + this.state.display;
        // ReactDOM.findDOMNode(this.rf.current).style.cssText = styleString;
    }

    getMapPoint(){
        // // this.props.rightIsOpen = bool;
        // console.log("this is happening");
        //
        // if (this.props.rightIsOpen){
        //     this.state.display = "table-column";
        //
        // } else {
        //     this.state.display = "none";
        // }
        //
        // // console.log(this.rf);
        //
        // let styleString = "width: calc(100%-300px); display: " + this.state.display;
        // ReactDOM.findDOMNode(this.rf.current).style.cssText = styleString;
        //
        // return this.state.rightIsOpen;
    }

    simpleAction = (event) => {
        // console.log(this.props);
        let newAmount = 5666;
        this.props.dispatch({type:"CHANGE_ORIGIN_AMOUNT", data:{newAmount: newAmount} });
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
                    >
                        <Grid />
                    </Rnd>
                </div>

                <div style={{width: 'calc(100% - 300px)', 'padding-right': '15px', display: `${this.props.displayRight}` }} >
                    <RightFocus />
                </div>
            </div>
        );
    }
}

export default connect((state, props) => {
    return {
        ...state
    }

})(MyView);