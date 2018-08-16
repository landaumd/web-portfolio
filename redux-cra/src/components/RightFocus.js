import React, { Component } from 'react';
import '../css/RightFocus.css';
import {connect} from "react-redux";
import Content from '../config/Content.json';
import { Line } from 'rc-progress';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
// import {logo} from './images.js';

class RightFocus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : Content,
            isMobile : this.props.isMobile,
            info : null,
        };

        configureAnchors({offset: -90, scrollDuration: 650})
        this.findFocusTarget = this.findFocusTarget.bind(this);
    }

    findFocusTarget = () => {
        Object.entries(this.state.data).map(([cardNum,content]) => {
            if(cardNum === this.props.myJSONid){
                this.state.info = content;
                return null
            } else {
                return null
            }
        })
    };

    createProgressBars() {
        let progBars = null;
        if (this.state.info.skills != null) {
            progBars = Object.entries(this.state.info.skills).map(([i, a]) => {
                return (
                    <div key={i}>
                        <p>{a.skillName}</p>
                        <Line percent={a.skillLevel} strokeColor="#E67E22" strokeWidth="2" trailColor="grey"/>
                    </div>
                )
            });
        }
        return progBars
    }

    createImageRow(rowName) {
        let imageRowHeader = null;
        if (rowName != null){
            imageRowHeader = Object.entries(rowName).map(([i, a]) => {
                console.log(a.padding)
                return (
                    <div key={i} className="col no-gutters">
                        <img className="img-fluid my-auto" style={{"padding" : a.padding}} src={a.src} alt={a.altText}/>
                    </div>
                )
            });
        }
        return imageRowHeader
    }

    createSingleImage(imageTop) {
        let image = null;
        if (imageTop != null){
            return (
                <div>
                    <img className="rounded-top-corners w-100" src={imageTop.imageSource} alt={imageTop.altText} />
                </div>
            )
        }
        return image
    }

    createParagraph(text) {
        if (text != null){
            return (
                <div>
                    <p>{text}</p>
                </div>
            )
        }
        return text
    }

    render() {
        this.findFocusTarget();

        let progBars = this.createProgressBars();

        let imageRowHeader = this.createImageRow(this.state.info.imageRowHeader);
        let imageRow1 = this.createImageRow(this.state.info.imageRow1);
        let imageRow2 = this.createImageRow(this.state.info.imageRow2);
        let imageRowBottom = this.createImageRow(this.state.info.imageRowBottom);

        let imageTop = this.createSingleImage(this.state.info.imageTop);
        let imageFull = this.createSingleImage(this.state.info.imageFull1);
        let paragraph1 = this.createParagraph(this.state.info.paragraph1)
        let paragraph2 = this.createParagraph(this.state.info.paragraph2)
        let paragraph3 = this.createParagraph(this.state.info.paragraph3)
        let paragraph4 = this.createParagraph(this.state.info.paragraph4)

        return (
            <div className="RightFocus rounded-corners">
                <ScrollableAnchor id={'section1'}>
                    <div style={{margin:'0px', padding:'0px'}}></div>
                </ScrollableAnchor>

                {/*Image Row Header*/}
                <div className="rounded-top-corners">
                    <div className="row no-gutters">
                        {imageRowHeader}
                    </div>
                </div>



                {imageTop}

                <div className="RightFocus-content">
          
                    <h1>{this.state.info.title}</h1>
                    <p className="lead">{this.state.info.subtitle}</p>

                    {paragraph1}
                    <br/>
                    {paragraph2}
                    {/*Progress Bars*/}
                    {progBars}

                    {/*Image Row 1*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRow1}
                        </div>
                    </div>

                    {paragraph3}

                    {/*Image Row 2*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRow2}
                        </div>
                    </div>

                    {imageFull}

                    {paragraph4}

                    {/*Image Row Bottom*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRowBottom}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default connect((state, props) => {
    return {
        ...state
    }

})(RightFocus);