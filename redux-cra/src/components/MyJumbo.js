import React, { Component } from "react";
import { Jumbotron, Button } from 'reactstrap';
import '../css/MyJumbo.css';
import CategoryColors from '../config/CategoryColors.json';
import { CardImg } from 'reactstrap';
import {connect} from "react-redux";
import Config from '../config/Config.json';

class MyJumbo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            config: Config,
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
                <div key={i} style={{backgroundColor: `${color}`}} className="badge mr-1 mt-1 py-1 px-1">{a}</div>
            )
        });

        return (
            <div>
                <Jumbotron>
                    <h3>{this.props.info.title}</h3>
                    <CardImg
                        className="w-100"
                        top width="100%"
                        src={require('../' + this.state.config['path-to-images-folder'] + this.props.info.thumbnail.src)}
                        alt={this.props.info.thumbnail.altText}
                        style={{"padding" : this.props.info.padding}}/>
                    <h4>{this.props.info.subtitle}</h4>
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