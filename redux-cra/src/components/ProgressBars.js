import React, { Component } from "react";
import { Line } from 'rc-progress';

class ProgressBars extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    createProgressBars() {
        let progBars = null
        progBars = Object.entries(this.state.info).map(([i, a]) => {
            return (
                <div key={i}>
                    <p style={{marginBottom: "0px", marginTop: "15px"}}>{a.skillName}</p>
                    <Line percent={a.skillLevel} strokeColor="#E67E22" strokeWidth="2" trailColor="grey"/>
                </div>
            )
        });

        return progBars
    }

    render() {
        let progBars = this.createProgressBars();

        return (
            <div>
                {progBars}
            </div>
        );
    }
};

export default ProgressBars;