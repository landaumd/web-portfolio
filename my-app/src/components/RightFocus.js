import React, { Component } from 'react';
import sizeMe from 'react-sizeme';
import './RightFocus.css';
import MyCarousel from "./MyCarousel";

class RightFocus extends Component {

    render() {

        const {
        } = this.props;


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