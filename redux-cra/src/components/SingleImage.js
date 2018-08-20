import React, { Component } from "react";
import Config from '../config/Config.json';

class SingleImage extends Component {
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
            <div>
                <img className="img-fluid my-auto rounded-top-corners" style={{"padding" : this.state.info.padding}} src={require('../' + this.state.config['path-to-images-folder'] + this.state.info.src)} alt={this.state.info.altText}/>
            </div>
        );
    }
}

export default SingleImage;