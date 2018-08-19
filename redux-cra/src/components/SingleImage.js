import React, { Component } from "react";

class SingleImage extends Component {
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
                <img className="img-fluid my-auto rounded-top-corners" style={{"padding" : this.state.info.padding}} src={this.state.info.src} alt={this.state.info.altText}/>
            </div>
        );
    }
}

export default SingleImage;