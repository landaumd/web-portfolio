import React, { Component } from "react";
import SmallSubtitle from "./SmallSubtitle";
import Config from '../config/Config.json';

class LeftImageRightText extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: Config,
            info: null
        };

        this.state.info = this.props.info;
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <img className="img-fluid my-auto rounded-corners" src={require('../' + this.state.config['path-to-images-folder'] + this.state.info.image.src)} alt={this.state.info.image.altText}/>
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