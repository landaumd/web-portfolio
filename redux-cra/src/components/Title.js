import React, { Component } from "react";

class Title extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    setTitle(){
        this.state.info = this.props.info;
    }

    render() {
        this.setTitle();

        return (
            <div>
                <h1>{this.state.info}</h1>
            </div>
        );
    }
};

export default Title;