import React, { Component } from "react";
import cardTest from './CardTest.json';
import {connect} from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : cardTest,
        }

        // this.createListOfComponents = this.createListOfComponents.bind(this);
    }

    render() {

        return (
            <div>
                {/*<Form className="form-inline my-0 my-lg-0">*/}
                    {/*<Input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />*/}
                    {/*<Button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</Button>*/}
                {/*</Form>*/}
            </div>

        );
    }
}

export default connect((state, props) => {
    return {
        ...state
    }

})(Search);