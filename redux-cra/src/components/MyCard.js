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
                <Card className="bg-dark text-white MyShadow-SVG" >
                    <CardImg className="w-100 MyOpacity"
                        top width="100%"
                        src={require('../' + this.state.config['path-to-images-folder'] + this.props.info.thumbnail.src)}
                        alt={this.props.info.thumbnail.altText}
                        style={{"padding" : this.props.info.thumbnail.padding, borderRadius: '0.25rem'}}
                    />
                    <CardBody className="card-img-overlay">

                        <h3 className="MyShadow-text full-opacity">{this.props.info.title}</h3>
                        <h4 className="MyShadow-text full-opacity">{this.props.info.subtitle}</h4>
                        <CardText>{this.props.info.bodyText}</CardText>

                        <div className="align-bottom-left full-opacity" style={{display: "block",   position: "absolute", bottom: 20, right: 0, left: 20, margin: 'auto'}}>
                            <div>
                                <Button href='#section1' className="btn-toggle btn-dark" onClick={this.toggleRight}>
                                    <div className="tiny-m-top">
                                        {(this.state.rightIsOpen) ? "See Less" : "See More"}
                                    </div>
                                </Button>
                            </div>
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