import React, { Component } from "react";

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    render() {
        this.state.info = this.props.info;
        return (
            <div>
                <a href={'https://drive.google.com/file/d/1Dxy2kxfxS4vZEO1yN6tgxz8cFUv2bwXR/view?usp=sharing'}><img src={require('../images-phill/Resume.png')}/></a>
            </div>
        );
    }
}

export default Resume;