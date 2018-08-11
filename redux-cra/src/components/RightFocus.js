import React, { Component } from 'react';
import './RightFocus.css';
import {connect} from "react-redux";
import cardTest from './CardTest.json';
import { Line } from 'rc-progress';

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
        };

        // var { myJSONid } = this.props;

        this.findFocusTarget = this.findFocusTarget.bind(this);
    }

    findFocusTarget = () => {
        Object.entries(this.state.data).map(([cardNum,content]) => {
            if(cardNum === this.props.myJSONid){
                this.state.title = content.title
                this.state.subtitle = content.subtitle
                this.state.bodyText = content.bodyText
                this.state.imageSource = content.imageSource
                this.state.skills = content.skills
                this.state.altText = content.altText
                return null
            } else {
                return null
            }
        })
    };

//     this.setState({
//                       title : content.title,
//     subtitle : content.subtitle,
//     bodyText : content.bodyText,
//     imageSource : content.imageSource,
//     skills : content.skills,
//     altText : content.altText,
// })

    render() {
        console.log("right focus")
        console.log(this.state.isMobile)
        this.findFocusTarget();

        let progBars = null
        if (this.state.skills != null) {
            progBars = Object.entries(this.state.skills).map(([i, a]) => {
                return (
                <div>
                    <p>{a.skillName}</p>
                    <Line percent={a.skillLevel} strokeColor="#E67E22" strokeWidth="2" trailColor="grey"/>
                </div>)
            });
        }

        return (
            <div style={this.state.isMobile ? {paddingLeft : '0px'} : {paddingLeft : '15px'}} className="RightFocus">
                <img src={this.state.imageSource} alt={this.state.altText} className="w-100" style={{borderRadius : "calc(.25rem - 1px) calc(.25rem - 1px) 0px 0px"}} />
                <div style={{padding: '15px'}}>
                    <h1>{this.state.title}</h1>
                    <p>{this.state.subtitle}</p>

                    {(progBars === null) ? null : progBars}

                    <hr className="my-2" />
                    <hr className="my-2" />
                    <p className="lead">{this.state.bodyText}</p>
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