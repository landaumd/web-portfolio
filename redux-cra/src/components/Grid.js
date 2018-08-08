import test from './data.json';
import React, { Component } from "react";
import './Grid.css';
import cardTest from './CardTest.json';
import MyCard from './MyCard.js';
import MyJumbo from './MyJumbo.js';
import StackGrid, { transitions } from "react-stack-grid";
import MyCarousel from './MyCarousel.js';
import sizeMe from 'react-sizeme';
const { scaleDown } = transitions;

// https://tsuyoshiwada.github.io/react-stack-grid/#/
// https://github.com/tsuyoshiwada/react-stack-grid#live-demo




class Grid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : cardTest,
            type : "MyCard",
            title: "This is the title of my Card 1",
            subtitle: "here is some other small info",
            bodyText: "Here is a whole bunch of test body text",
            imageSource : "https://barkpost.com/wp-content/uploads/2015/02/thelifeofhank.jpg"



        }
    }



    componentDidUpdate = () => {
        this.grid.updateLayout();
    }


   //
   // parseJson(){
   //
   //     console.log(Object.entries(this.state.data));


       // Object.entries(this.state.data).map(([cardNum,content]) => {
       //     // console.log(cardNum);
       //     // console.log(content.title);
       //     // console.log(content.subtitle);
       //     // console.log(content.bodyText);
       //     // console.log(content.imageSource);
       //     this.state.title = content.title;
       //     this.state.subtitle = content.subtitle;
       //     this.state.bodyText = content.bodyText;
       //     this.state.imageSource = content.imageSource;
       //
       //
       //
       // });
       // Object.keys(this.state.data).map(function(keyName, keyIndex) {
       //     // use keyName to get current key's name
       //     // and a[keyName] to get its value
       //     console.log(keyName);
       //     console.log(keyIndex);
       // })
   // }

    render() {


        const {
            size: {
                width
            }


        } = this.props;

        let Arr = Object.entries(this.state.data).map(([i,a]) => {

            if(a.component=== "MyCard") {
                console.log("In grid. Id is: " + a.myJSONid);
                return <MyCard key={i} info={a}/>


            }else if (a.component === "MyJumbo"){
                return <MyJumbo key={i} info={a}/>

            }
        })




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


                    {Arr}
                    {/*< MyCard title={this.state.title} subtitle={this.state.subtitle} bodyText={this.state.bodyText} imageSource={this.state.imageSource}/>*/}

                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyJumbo />*/}
                        {/*< MyCarousel/>*/}
                        {/*< MyCard />*/}
                        {/*/!*< Collapsible key={1} onClick={() => this.changeItemSize(0)}/>*!/*/}
                        {/*< MyCard />*/}
                        {/*< MyCard />*/}
                        {/*< MyCarousel/>*/}
                    {/*<ul>*/}
                        {/*{Object.keys(this.elem).map((v, i) => <li key={i}> {v} {this.elem[v]} </li> )}*/}
                    {/*</ul>*/}

                    {/*<div>*/
                    /*<div key="key1">Item 1</div>*/
                    /*<div key="key2">Item 2</div>*/
                    /*<div key="key3">Item 3</div>*/
                    /*</div>*/}

                </StackGrid>
            </div>
        );
    }
}

export default sizeMe()(Grid);