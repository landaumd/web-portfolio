import React, { Component } from 'react';
import {connect} from "react-redux";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';
import './MyCarousel.css';

let items = [];

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

        this.makeItems = this.makeItems.bind(this);
        this.toggleRight = this.toggleRight.bind(this);
    }


    toggleRight = () => {
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

    makeItems(){
        items = [];
        Object.entries(this.state.info).map(([i,a]) => {
            if (i === "images"){
                items = a;
                return null
            } else {
                return null
            }
        });
    }

    render() {
        const { activeIndex } = this.state;

        this.makeItems();

        let slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img style={{width:'50vw', height: '50vw'}} src={item.src} alt={item.altText}  />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (

            <Carousel
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