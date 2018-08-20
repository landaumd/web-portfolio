import React, { Component } from "react";
import Config from '../config/Config.json';

class ImageRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: Config,
            info: null
        };

        this.state.info = this.props.info;
    }

    createImageRow() {
        let imageRow = Object.entries(this.state.info).map(([i, a]) => {
            return (
                <div key={i} className="col no-gutters">
                    <img className="img-fluid my-auto" style={{"padding" : a.padding}} src={require('../' + this.state.config['path-to-images-folder'] + a.src)} alt={a.altText}/>
                </div>
            )
        });

        return imageRow
    }

    render() {
        let imageRow = this.createImageRow();

        return (
            <div>
                <div className="row no-gutters">
                    {imageRow}
                </div>
            </div>
        );
    }
}

export default ImageRow;