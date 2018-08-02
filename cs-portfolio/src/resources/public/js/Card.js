import React, { Component } from 'react';
import robots from './robots.jpg';

class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="card-img-top" src={robots} alt="Card image cap"/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
            </div>
        );
    }
}

export default Card;