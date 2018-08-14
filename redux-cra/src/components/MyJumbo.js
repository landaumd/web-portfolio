import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import '../css/MyJumbo.css';
import CategoryColors from '../config/CategoryColors.json';
import { CardImg } from 'reactstrap';
import {connect} from "react-redux";

class MyJumbo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;

        // var {rightIsOpen} = this.props;
        this.toggleRight = this.toggleRight.bind(this);
    }

    toggleRight = () => {
        this.props.dispatch({type:'SHOW_CARD', data:{myJSONid: this.props.info.myJSONid} });
    }

    render() {

        var categories = Object.entries(this.state.info.category).map(([i, a]) => {
            var color = CategoryColors[a]
            return (
                <div style={{backgroundColor: `${color}`}} className="badge mr-1 mt-1 py-1 px-1">{a}</div>
            )
        });

        return (
            <div>
                <Jumbotron>
                    <h1 className="display-3">{this.props.info.title}</h1>
                    <CardImg top width="100%"
                             src={this.props.info.imageSource}
                             alt="Card image cap"/>
                    <p className="lead">{this.props.info.subtitle}</p>
                    <hr className="my-2"/>
                    <p>{this.props.info.bodyText}</p>
                    <p className="lead"></p>
                    <div>
                        <Button href='#section1' color="primary" className="btn-toggle" onClick={this.toggleRight}>
                            <div className="tiny-m-top">
                                {(this.state.rightIsOpen) ? "See Less" : "See More"}
                            </div>
                        </Button>
                    </div>
                    {categories}
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