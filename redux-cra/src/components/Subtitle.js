import React, { Component } from "react";

class Subtitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    render() {
        return (
            <div>
                <h2>{this.state.info}</h2>
            </div>
        );
    }
};

export default Subtitle;