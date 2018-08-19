import React, { Component } from 'react';
import '../css/RightFocus.css';
import {connect} from "react-redux";
import Content from '../config/Content.json';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import Paragraph from "./Paragraph";
import Subtitle from "./Subtitle";
import Title from "./Title";
import LeftImageRightText from "./LeftImageRightText";
import SmallSubtitle from "./SmallSubtitle";
import ImageRow from "./ImageRow";
import Video from "./Video";
import MyCarousel from "./MyCarousel";
import SingleImage from "./SingleImage";
import ProgressBars from "./ProgressBars";
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
        this.createContentFromList = this.createContentFromList.bind(this);
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
                        {/*<Line percent={a.skillLevel} strokeColor="#E67E22" strokeWidth="2" trailColor="grey"/>*/}
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

    createImagesHeader(){
        if (this.state.info.imageTop !== undefined){
            return <SingleImage className={"rounded-top-corners"} info={this.state.info.imageTop}/>
        } else if (this.state.info.imageRowHeader !== undefined){
            return <ImageRow info={this.state.info.imageRowHeader}/>
        }
    }

    createContentFromList(){
        let contentList = this.state.info.contentInOrder;

        let content;
        if (contentList != null) {
            content = Object.entries(contentList).map(([i, a]) => {
                if (i.startsWith("paragraph")){
                    return <Paragraph key={i} info={a}/>

                } else if (i.startsWith("subtitle")){
                    return <Subtitle key={i} info={a}/>

                } else if (i.startsWith("title")){
                    return <Title key={i} info={a}/>

                } else if (i.startsWith("left-image-right-text")){
                    return <LeftImageRightText key={i} info={a}/>

                } else if (i.startsWith("small-subtitle")){
                    return <SmallSubtitle key={i} info={a}/>

                } else if (i.startsWith("image-row")){
                    return <ImageRow key={i} info={a}/>

                } else if (i.startsWith("video")){
                    return <Video key={i} info={a}/>

                } else if (i.startsWith("space")){
                    return <br key={i} />

                } else if (i.startsWith("carousel")){
                    return <MyCarousel className="w-100" key={i} info={a}/>

                } else if (i.startsWith("single-image")){
                    return <SingleImage key={i} info={a}/>

                } else if (i.startsWith("progress-bars")){
                    return <ProgressBars key={i} info={a}/>

                }
            });
        }
        return content
    }

    render() {
        this.findFocusTarget();
        let content = this.createContentFromList();
        let imagesHeader = this.createImagesHeader();
        return (
            <div className="RightFocus rounded-corners">
                <ScrollableAnchor id={'section1'}>
                    <div style={{margin:'0px', padding:'0px'}}></div>
                </ScrollableAnchor>

                {/*/!*Image Row Header*!/*/}
                {/*<div className="rounded-top-corners">*/}
                    {/*<div className="row no-gutters">*/}
                        {/*{imageRowHeader}*/}
                    {/*</div>*/}
                {/*</div>*/}
                {imagesHeader}
                {/*{imageTop}*/}

                <div className="RightFocus-content">
                    {content}
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