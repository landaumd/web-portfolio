import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from "react-redux";

class MyCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
        this.toggleRight = this.toggleRight.bind(this);
    }

    toggleRight = () => {
        this.props.dispatch({type:"SHOW_CARD", data:{myJSONid: this.props.info.myJSONid} });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src={this.props.info.imageSource}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.props.info.title}</CardTitle>
                        <CardSubtitle>{this.props.info.subtitle}</CardSubtitle>
                        <CardText>{this.props.info.bodyText}</CardText>
                        <Button href='#section1' className="btn-toggle" onClick={this.toggleRight}>{(this.state.rightIsOpen) ? "See Less" : "See More"}</Button>
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