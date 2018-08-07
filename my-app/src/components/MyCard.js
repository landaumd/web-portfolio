
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import React, { Component } from "react";

class MyCard extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>{this.props.title}</CardTitle>
                    <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                    <CardText>{this.props.bodyText}</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </div>
    )};
};

export default MyCard;