import React, { Component } from "react";

class LargeSubtitle extends Component {
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
                <h4>{this.state.info}</h4>
            </div>
        );
    }
}

export default LargeSubtitle;