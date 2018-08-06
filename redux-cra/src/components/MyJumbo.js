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
                    <h1 className="display-3">Hello, world!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra
                        attention to featured content or information.</p>
                    <hr className="my-2"/>
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
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
        originAmount: state.originAmount,
        rightIsOpen: state.rightIsOpen,
        displayRight: state.displayRight
    }

})(MyJumbo);