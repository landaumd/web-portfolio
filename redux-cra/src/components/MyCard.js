import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {connect} from "react-redux";

class MyCard extends Component {
    constructor(props) {
        super(props);

        var {rightIsOpen} = this.props;
        this.toggleRight = this.toggleRight.bind(this);
    }

    toggleRight = () => {
        let newAmount = 5;
        this.props.dispatch({type:"TOGGLE_RIGHT_IS_OPEN", data:{newAmount: newAmount} });
    }

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src={this.props.imageSource}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.props.title}</CardTitle>
                        <CardSubtitle>{this.props.subtitle}</CardSubtitle>
                        <CardText>{this.props.bodyText}</CardText>
                        <Button className="btn-toggle" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "Open" : "Closed"}</Button>                    </CardBody>
                </Card>
            </div>
        );
    }
};

export default connect((state, props) => {
    return {
        originAmount: state.originAmount,
        rightIsOpen: state.rightIsOpen,
        displayRight: state.displayRight
    }

})(MyCard);