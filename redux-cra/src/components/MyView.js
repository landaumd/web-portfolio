import React, { Component } from "react";
import Grid from "./Grid.js";
import '../css/MyView.css';
import RightFocus from "./RightFocus";
import { connect } from "react-redux";

class MyView extends  Component {
    constructor(props) {
        super(props);

        let { rightIsOpen } = this.props;

        this.state = {
            rightIsOpen: rightIsOpen,
            leftWidth: '100%',
            display: 'none',
            width: window.innerWidth,
            isMobile : false,
            isTINYMobile : false,
        };

    }

    // componentDidMount(){
    //     window.location.href.anchor('#section1');
    // }

    componentWillMount() {
        window.addEventListener('resize', this.handleWindowSizeChange);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleWindowSizeChange);
    }

    handleWindowSizeChange = () => {
        this.setState({ width: window.innerWidth });
    };

    render() {
        const { width } = this.state;

        this.state.isMobile = width <= 500;
        this.state.isTINYMobile = width <= 320;

        if (this.state.isMobile) {
            return (
                <div className="row MyView-container-mobile">
                    <div style={{width: '100%', paddingBottom : '15px', paddingLeft : '0px', display: `${this.props.displayRight}` }} >
                        <RightFocus isMobile={this.state.isMobile} />
                    </div>
                    <div className="no-gutters col">
                        <Grid idsWithCategory={this.props.idsWithCategory} isTINYMobile={this.state.isTINYMobile} isMobile={this.state.isMobile}/>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="row no-gutters MyView-container">

                    <div className="col no-gutters">
                        <Grid style={{minWidth: '300px'}} idsWithCategory={this.props.idsWithCategory} isTINYMobile={this.state.isTINYMobile} isMobile={this.state.isMobile}/>
                    </div>
                    <div style={{width: 'calc(100% - 300px)', paddingBottom : '15px', paddingLeft : '15px', display: `${this.props.displayRight}` }} >
                        <RightFocus isMobile={this.state.isMobile}/>
                    </div>
                </div>

            );
        }
    }
}

export default connect((state, props) => {
    return {
        ...state
    }
})(MyView);