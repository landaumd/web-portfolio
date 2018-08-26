import React, { Component } from "react";
import Config from '../config/Config.json';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';

class Resume extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: Config,
            info: null,
            isMobile : this.props.isMobile,
        };

        this.state.info = this.props.info;
    }

    render() {
        this.state.info = this.props.info;

        let scale
        let width = window.innerWidth
        if (width <= 320){
            scale = 0.4
        } else if (width <= 375){
            scale = 0.5
        } else if (width <= 415){
            scale = 0.55
        } else if (width <= 768){
            scale = 0.6
        } else if (width <= 900) {
            scale = 0.8
        } else {
            scale = 1.0
        }

        return (
                <div>
                    <a href={this.state.info.link}>Click here to download my resume as a PDF from Google Drive.</a>
                    <Document
                        file={require('../' + this.state.config['path-to-images-folder'] + this.state.info.resume)}
                    >
                        <Page scale={scale} pageNumber={1}/>
                    </Document>
                </div>
            );
    }
}

export default Resume;