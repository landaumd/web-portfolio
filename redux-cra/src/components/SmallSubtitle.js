import React, { Component } from "react";

class SmallSubtitle extends Component {
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
                <h6>{this.state.info}</h6>
            </div>
        );
    }
}

export default SmallSubtitle;