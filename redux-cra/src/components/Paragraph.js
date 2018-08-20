import React, { Component } from "react";

class Paragraph extends Component {
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
                <p>{this.state.info}</p>
            </div>
        );
    }
};

export default Paragraph;