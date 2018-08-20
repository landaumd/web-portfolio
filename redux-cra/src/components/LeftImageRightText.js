import React, { Component } from "react";
import SmallSubtitle from "./SmallSubtitle";

class LeftImageRightText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <img className="img-fluid my-auto rounded-corners" src={require('../images/' + this.state.info.image.src)} alt={this.state.info.image.altText}/>
                </div>
                <div className="col">
                    <SmallSubtitle info={this.state.info.subtitle} />
                    <p>{this.state.info.paragraph}</p>
                </div>
            </div>
        );
    }
}

export default LeftImageRightText;