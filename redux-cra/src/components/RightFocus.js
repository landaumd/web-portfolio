import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import './RightFocus.css';
import MyCarousel from "./MyCarousel";

class RightFocus extends Component {
    constructor(props) {
        super(props);

        // this.onRightOpen = props.viewOpenRightSide(props.rightIsOpen).bind(this);
        // this.state = {
        //     rightIsOpen: null,
        //     leftWidth: '100%',
        //     display: 'none',
        // };
    }

    render() {
        return (
            <div className="RightFocus">
                <h1 className="display-3">Hello, world!</h1>
                <p>Here is some stuff that should be printed</p>
                <hr className="my-2" />
                <hr className="my-2" />
                <p className="lead">More cool stuff will go in here: like images and story INFO</p>
            </div>
        );
    }

}

export default RightFocus;