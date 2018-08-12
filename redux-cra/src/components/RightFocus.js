import React, { Component } from 'react';
import './RightFocus.css';
import {connect} from "react-redux";
import cardTest from './CardTest.json';
import { Line } from 'rc-progress';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor'


class RightFocus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : cardTest,
            title : null,
            subtitle : null,
            imageSource : null,
            altText : null,
            bodyText : null,
            skills: [],
            isMobile : this.props.isMobile,
            imageRowHeader : null,
            imageRow1 : null,
            imageRow2 : null,
            imageRowBottom : null,
        };

        configureAnchors({offset: -90, scrollDuration: 650})
        this.findFocusTarget = this.findFocusTarget.bind(this);

        console.log("megan")
    }

    findFocusTarget = () => {
        Object.entries(this.state.data).map(([cardNum,content]) => {
            if(cardNum === this.props.myJSONid){

                // this.setState(content)
                this.state.title = content.title
                this.state.subtitle = content.subtitle
                this.state.bodyText = content.bodyText
                this.state.imageSource = content.imageSource
                this.state.skills = content.skills
                this.state.altText = content.altText
                this.state.imageRowHeader = content.imageRowHeader
                this.state.imageRow1 = content.imageRow1
                this.state.imageRow2 = content.imageRow2
                this.state.imageRowBottom = content.imageRowBottom
                return null
            } else {
                return null
            }
        })
    };

    createProgressBars() {
        let progBars = null
        if (this.state.skills != null) {
            progBars = Object.entries(this.state.skills).map(([i, a]) => {
                return (
                    <div>
                        <p>{a.skillName}</p>
                        <Line percent={a.skillLevel} strokeColor="#E67E22" strokeWidth="2" trailColor="grey"/>
                    </div>
                )
            });
        }
        return progBars
    }

    createImageRow(rowName) {
        let imageRowHeader = null
        if (rowName != null){
            imageRowHeader = Object.entries(rowName).map(([i, a]) => {
                return (
                    <div className="col no-gutters">
                        <img className="img-fluid" src={a.src} alt={a.altText}/>
                    </div>
                )
            });
        }
        return imageRowHeader
    }

    render() {
        // right focus is passed isMobile argument

        this.findFocusTarget();

        var progBars = this.createProgressBars();
        var imageRowHeader = this.createImageRow(this.state.imageRowHeader);
        var imageRow1 = this.createImageRow(this.state.imageRow1);
        var imageRow2 = this.createImageRow(this.state.imageRow2);
        var imageRowBottom = this.createImageRow(this.state.imageRowBottom);

        return (
            <div className="RightFocus">
                <ScrollableAnchor id={'section1'}>
                    <div style={{margin:'0px', padding:'0px'}}></div>
                </ScrollableAnchor>
                {/*Image Row Header*/}
                <div className="rounded-top-corners">
                    <div className="row no-gutters">
                        {imageRowHeader === null ? null : imageRowHeader}
                    </div>
                </div>

                <img src={this.state.imageSource} alt={this.state.altText} className="w-100" />

                <div className="RightFocus-content">
          
                    <h1>{this.state.title}</h1>
                    <p>{this.state.subtitle}</p>

                    {/*Progress Bars*/}
                    {progBars === null ? null : progBars}

                    {/*Image Row 1*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRow1 === null ? null : imageRow1}
                        </div>
                    </div>

                    <hr className="my-2" />
                    <hr className="my-2" />
                    <p className="lead">{this.state.bodyText}</p>

                    {/*Image Row 2*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRow2 === null ? null : imageRow2}
                        </div>
                    </div>

                    <p className="lead">{this.state.bodyText}</p>
                    <p className="lead">{this.state.bodyText}</p>
                    <p className="lead">{this.state.bodyText}</p>

                    {/*Image Row Bottom*/}
                    <div>
                        <div className="row no-gutters">
                            {imageRowBottom === null ? null : imageRowBottom}
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