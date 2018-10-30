import React, { Component } from "react";
import Config from '../config/Config.json';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import { Button } from 'reactstrap';

class PdfViewer extends Component {
    constructor(props) {
        super(props);

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

        this.state = {
            config: Config,
            info: null,
            isMobile : this.props.isMobile,
            numPages: null,
            pageNumber: 1,
            scale: scale
        };

        console.log(this.state.scale)
        this.state.info = this.props.info;
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.createPaging = this.createPaging.bind(this);
    }

    onDocumentLoad = ({ numPages }) => {
        this.setState({ numPages });
    }

    nextPage = () => {
        if (this.state.numPages >= this.state.pageNumber && this.state.pageNumber !== this.state.numPages) {
            let newPageNum = this.state.pageNumber + 1
            this.setState({
                pageNumber: newPageNum
            })
        }
    };

    previousPage = () => {

        if (this.state.pageNumber > 1) {
            let newPageNum = this.state.pageNumber - 1
            this.setState({
                pageNumber: newPageNum
            })
        }
    };

    createPaging() {
        if (this.state.numPages > 1) {
            return (
                <div className="container">
                    <div className="row ">
                        <div className="col text-center">
                            <p className="my-auto">{this.state.pageNumber} / {this.state.numPages}</p>
                        </div>
                        <div className="col text-center">
                            <Button className="badge my-auto badge-dark w-100" style={{height: 25}} onClick={this.previousPage}>Previous</Button>
                        </div>
                        <div className="col text-center">
                            <Button className="badge my-auto badge-dark w-100" style={{height: 25}} onClick={this.nextPage}>Next</Button>
                        </div>
                    </div>
                </div>
            )
        }
    }

    render() {
        this.state.info = this.props.info;
        const { pageNumber, numPages } = this.state;

        let paging = this.createPaging();

        return (
                <div>
                    <a className="pdf-link" href={this.state.info.link}>{this.state.info.linkText}</a>
                    <Document
                        file={require('../' + this.state.config['path-to-images-folder'] + this.state.info.pdf)}
                        onLoadSuccess={this.onDocumentLoad}
                    >
                        <Page scale={this.state.scale} pageNumber={pageNumber}/>
                        <div className="container w-100">
                            {paging}
                        </div>
                    </Document>
                </div>
            );
    }
}

export default PdfViewer;