import React, { Component } from "react";

class Subtitle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    getSubtitle(){
        this.state.info = this.props.info;
    }

    render() {
        this.getSubtitle()
        return (
            <div>
                <h5>{this.state.info}</h5>
            </div>
        );
    }
};

export default Subtitle;