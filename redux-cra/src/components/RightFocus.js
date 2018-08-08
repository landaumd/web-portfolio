import React, { Component } from 'react';
import './RightFocus.css';
import {connect} from "react-redux";
import cardTest from './CardTest.json';

class RightFocus extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data : cardTest,
            title : null,
            subtitle : null,
            imageSource : null,
            bodyText : null,
        };

        var { myJSONid } = this.props;

        this.findFocusTarget = this.findFocusTarget.bind(this);
    }

    findFocusTarget() {

        // console.log(this.props);

        Object.entries(this.state.data).map(([cardNum,content]) => {
            // console.log(cardNum);
            // console.log(content.title);
            // console.log(content.subtitle);
            // console.log(content.bodyText);
            // console.log(content.imageSource);

            if(cardNum === this.props.myJSONid){
                // console.log("FOUND IT")
                this.state.title = content.title;
                this.state.subtitle = content.subtitle;
                this.state.bodyText = content.bodyText;
                this.state.imageSource = content.imageSource;
            }
        })
    }

    render() {
        this.findFocusTarget();
        return (
            <div className="RightFocus">
                <img src={this.state.imageSource} className="w-100" />
                <h1 className="display-3">{this.state.title}</h1>
                <p>{this.state.subtitle}</p>
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