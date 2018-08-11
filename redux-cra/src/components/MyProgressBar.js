import React, { Component } from "react";
import {connect} from "react-redux";
import { Card, CardImg, CardBody,
    CardTitle, Button } from 'reactstrap';
// import { Line, Circle } from 'rc-progress';
import { Circle } from 'rc-progress';

import './Grid.css';

class MyProgressBar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
        this.toggleRight = this.toggleRight.bind(this);

        this.makeBars = this.makeBars.bind(this);


    }

    makeBars(){


        return(


            <Circle
            text='JAVA skill'
            initialAnimate={true}
            percent={this.props.info.skills[0].skillLevel}
            containerClassName={'.progressbar'}


        />
        )
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
                                 alt="Card image cap"
                        />
                        <CardBody>
                            <CardTitle>{this.props.info.title}</CardTitle>
                            {/*<Line percent="70" strokeWidth="4" strokeColor="#E67E22" strokeWidth="15"  trailColor="#800000" strokeLinecap="butt"	  />*/}

                            {this.makeBars()}

                            <Button className="btn-toggle" onClick={this.toggleRight}>{(this.state.rightIsOpen) ? "See Less" : "See More"}</Button>
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
})(MyProgressBar);