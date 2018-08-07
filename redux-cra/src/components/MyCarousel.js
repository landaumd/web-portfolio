import React, { Component } from 'react';
import {connect} from "react-redux";
import { Button } from 'reactstrap';
import cardTest from './CardTest.json';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './MyCarousel.css';


const items = [
    {
        src: null,
        altText: null,
        caption: null
    },
    {
        src: null,
        altText: null,
        caption: null
    },
    {
        src: null,
        altText: null,
        caption: null
    }
];

class MyCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            activeIndex: 0,
            info: null

        };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);


        this.state.info = this.props.info;



        var {rightIsOpen} = this.props;
        this.toggleRight = this.toggleRight.bind(this);




    }

    makeItems(){

        items.src= "";
        items.altText= "";
        items.caption= "";



        // for(var i=0;i<this.props.info.numOfImages;i++){
        //
        // }
    }


    toggleRight = () => {
        // console.log("looking for: " + this.props.info.myJSONid);
        this.props.dispatch({type:"TOGGLE_RIGHT_IS_OPEN", data:{myJSONid: this.props.info.myJSONid} });
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;


        const slides = items.map((item) => {
            return (


                <CarouselItem className="MyCarousel-carousel-item"
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    items={this.makeItems()}
                    key={item.src}
                >

                    <img  src={item.src} alt={item.altText}  className="MyCarousel-carousel-image"/>
                    {/*<CarouselCaption captionText={item.caption} onClick={this.toggleRight>(this.props.rightIsOpen) ? "Open" : "Closed"} captionHeader={item.caption} />*/}

                </CarouselItem>
            );
        });

        return (

            <Carousel className="MyCarousel-carousel-card"
                activeIndex={activeIndex}
                next={this.next}
                previous={this.previous}

            >
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />

            </Carousel>
        );
    }
}


export default connect((state, props) => {
    return {
        ...state
    }

})(MyCarousel);