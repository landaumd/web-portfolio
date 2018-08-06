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
                             src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>Card title</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                            content.</CardText>
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