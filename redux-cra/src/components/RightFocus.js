import React, { Component } from 'react';
import './RightFocus.css';
import {connect} from "react-redux";
import cardTest from './CardTest.json';
import { Line, Circle } from 'rc-progress';

class RightFocus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : cardTest,
            title : null,
            subtitle : null,
            imageSource : null,
            bodyText : null,
            skills: []
        };

        var { myJSONid } = this.props;

        this.findFocusTarget = this.findFocusTarget.bind(this);
    }

    findFocusTarget = () => {
        Object.entries(this.state.data).map(([cardNum,content]) => {
            if(cardNum === this.props.myJSONid){
                this.state.title = content.title;
                this.state.subtitle = content.subtitle;
                this.state.bodyText = content.bodyText;
                this.state.imageSource = content.imageSource;
                this.state.skills = content.skills;

            }

        })
    }

    render() {
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
            <div className="RightFocus">
                <img src={this.state.imageSource} className="w-100" />
                <h1 className="display-3">{this.state.title}</h1>
                <p>{this.state.subtitle}</p>

                {(progBars === null) ? null : progBars}

                <hr className="my-2" />
                <hr className="my-2" />
                <p className="lead">{this.state.bodyText}</p>
            </div>
        );
    }

}

export default connect((state, props) => {
    return {
        ...state
    }

})(RightFocus);