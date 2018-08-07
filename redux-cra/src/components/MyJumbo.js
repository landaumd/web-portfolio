import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import './MyJumbo.css';
import {connect} from "react-redux";

class MyJumbo extends Component {
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
                <Jumbotron>
                    <h1 className="display-3">{this.props.title}</h1>
                    <p className="lead">{this.props.subtitle}</p>
                    <hr className="my-2"/>
                    <p>{this.props.bodyText}</p>
                    <p className="lead">
                        <Button color="primary" className="btn-toggle" onClick={this.toggleRight}>{(this.props.rightIsOpen) ? "Open" : "Closed"}</Button>
                    </p>
                </Jumbotron>
            </div>
        );
    }
};

export default connect((state, props) => {
    return {
        ...state
    }

})(MyJumbo);