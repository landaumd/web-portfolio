import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from "react-redux";
import CategoryColors from '../config/CategoryColors.json';



class MyCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null,

        };

        this.state.info = this.props.info;
        this.toggleRight = this.toggleRight.bind(this);
    }

    toggleRight = () => {
        this.props.dispatch({type:"SHOW_CARD", data:{myJSONid: this.props.info.myJSONid} });
    }

    render() {

        var categories = Object.entries(this.state.info.category).map(([i, a]) => {
            var color = CategoryColors[a]
            return (
                <div key={i} style={{backgroundColor: `${color}`}} className="badge mr-1 mt-1 py-1 px-1">{a}</div>
            )
        });

        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src={this.props.info.thumbnail.imageSource}
                             alt={this.props.info.thumbnail.altText}/>
                    <CardBody>
                        <CardTitle>{this.props.info.title}</CardTitle>
                        <CardSubtitle>{this.props.info.subtitle}</CardSubtitle>
                        <CardText>{this.props.info.bodyText}</CardText>
                        <div>
                            <Button href='#section1' className="btn-toggle" onClick={this.toggleRight}>
                                <div className="tiny-m-top">
                                    {(this.state.rightIsOpen) ? "See Less" : "See More"}
                                </div>
                            </Button>
                        </div>
                        {categories}
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