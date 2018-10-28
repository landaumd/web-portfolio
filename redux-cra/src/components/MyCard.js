import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from "react-redux";
import CategoryColors from '../config/CategoryColors.json';
import Config from '../config/Config.json';
import '../css/MyCard.css'


class MyCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: Config,
            info: null

        };

        this.state.info = this.props.info;
        this.toggleRight = this.toggleRight.bind(this);
    }

    toggleRight = () => {
        window.location = '#section1';
        this.props.dispatch({type:"SHOW_CARD", data:{myJSONid: this.props.info.myJSONid} });
    }

    render() {
        let categories = Object.entries(this.state.info.category).map(([i, a]) => {
            let color = CategoryColors[a];
            return (
                <div key={i} style={{backgroundColor: `${color}`}} className="badge mr-1 mt-1 py-1 px-1">{a}</div>
            )
        });

        return (
            <div>
                <Card onClick={this.toggleRight} className="rounded-corners">
                    <CardImg className="w-100 rounded-top-corners"
                        top width="100%"
                        src={require('../' + this.state.config['path-to-images-folder'] + this.props.info.thumbnail.src)}
                        alt={this.props.info.thumbnail.altText}
                        style={{"padding" : this.props.info.thumbnail.padding}}
                    />
                    <CardBody className="w-100 full-opacity">

                        <h3>{this.props.info.title}</h3>
                        <h4>{this.props.info.subtitle}</h4>
                        {/*<CardText>{this.props.info.bodyText}</CardText>*/}

                        <div className="align-bottom-left full-opacity">
                            {categories}
                        </div>
                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default connect((state, props) => {
    return {
        ...state
    }
})(MyCard);