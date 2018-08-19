import React, { Component } from "react";

class ImageRow extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    createImageRow() {
        let imageRow = Object.entries(this.state.info).map(([i, a]) => {
            return (
                <div key={i} className="col no-gutters">
                    <img className="img-fluid my-auto" style={{"padding" : a.padding}} src={a.src} alt={a.altText}/>
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