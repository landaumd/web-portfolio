// import test from './data.json';
import cardTest from './CardTest.json';
import React, { Component } from "react";
import './Grid.css';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
import easyTest from './CardTest';
import simpleTest from '../simpleTest';
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
const { scaleDown } = transitions;




// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo



class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : cardTest.cards,
            type : "MyCard",
            title: "This is the title of my Card 1",
            subtitle: "here is some other small info",
            bodyText: "Here is a whole bunch of test body text",
            image : "Here is a URL to an image"



        }


        //
        // this.arr = this.state.data;
        // // this.arr.push(Object.keys(this.state.data));
        // console.log(this.arr["Card1"].["title"])
        // console.log(typeof(this.arr));
        //
        // for(var i=0;i<this.arr.size;i++ ){
        //     console.log(this.arr[i]);

            // if (this.arr[i].length > 0){
            //     for(var j=0;j<this.arr[i].length;j++ ) {
            //         console.log(this.arr[i][j]["body-text"]);
            //     }
            // }
        // }
        //
        // console.log("end");
        // Object.keys(this.elem).forEach(function(key) {
        //     console.log(Object.keys(this.elem));

        // });


        // console.log(Object.keys(this.state.data));
        // console.log(this.state.data);
        // console.log(this.state.data);
        // var keys = Object.keys(this.state.data);
        // console.log(keys);



        // console.log(test[0].title);
        // console.log(test[0].thumbnail);
        // console.log(test[0].description);
        // console.log(test[0].content.text);
        // console.log(keys);
        //
        // var myJson = JSON.stringify(test);
        // console.log(myJson);
        //
        //
        // var allKeys = keys.map((t) => (<div>{test[t].title}</div>));
        // console.log(allKeys);
        //
        // console.log(allKeys[0].props.children);
        // console.log(allKeys[0].props.children.data);
        // console.log(allKeys[1].props.children);
        //
        // console.log(Object.keys(test).map((v, i) => <li key={i}> {v} {test[v]} </li> ));
        // return (<div>{allKeys}</div>)
    }

    componentDidUpdate = () => {
        this.grid.updateLayout();
    }

    // getNumbers() {
    //     if (this.arr) {
    //         return Object.keys(this.elem).map( (key) => {
    //             return <p>{key} => {this.elem[key]}</p>;
    //         });
    //     } else {
    //         return <p>data is not available</p>;
    //     }
    // }




    render() {

        const {
            size: {
                width
            }
        } = this.props;

        return (
            <div className="Grid-container">
                <StackGrid
                    // ref={this.grid}
                    gridRef={grid => this.grid = grid}
                    //style={{'background-color': 'red'}}
                    // style={{'padding-top': '20rem}}
                    // columnWidth={300}
                    gutterWidth={15}
                    columnWidth={width <= 400 ? '100%' : (width <= 650 ? '50%' : (width <= 950 ? '33%' : '25%'))}
                    gutterHeight={15}
                    enter={scaleDown.enter}
                    monitorImagesLoaded={true}
                    // horizontal={true}
                    // rtl={true}

                >

                    {/*{this.state.items.map(({ id, active, height }) => (*/}
                    {/*{this.state.items.map(({item}) => (*/}
                        {/*<span*/}
                            {/*{*/}
                                {/*React.cloneElement(*/}
                                    {/*MyCard,*/}
                                    {/*{title: item.title}*/}
                                {/*)*/}
                            {/*}*/}
                            {/*// key={id}*/}
                            {/*// style={{*/}
                            {/*//     transition: 'background 200ms ease-out',*/}
                            {/*//     background: active ? '#c9cae3' : '#dfe0df',*/}
                            {/*//     height,*/}
                            {/*// }}*/}
                            {/*// onClick={() => this.changeItemSize(id)}*/}
                        {/*/>*/}
                    {/*))}*/}

                    {/*<ul>{this.arr.map(item => <MyCard key={item.label} label={item.label} value={item.value} />)}</ul>;*/}



                    {/*{ this.elem.map((item, index) => { return <MyCard {... item}/> }) }*/}



                    < MyCard title={this.state.title} subtitle={this.state.subtitle} bodyText={this.state.bodyText}/>
                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*< MyCard />*/}
                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}





                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);