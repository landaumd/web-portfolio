import React, { Component } from "react";
import Grid from "./Grid.js";
import { Rnd, size, position } from 'react-rnd';
import './MyView.css';

class MyView extends  Component {

    render() {
        return (
            <div className="MyView-container">
                {/*<Rnd*/}
                    {/*size={{ width: '300px',  height: '300px' }}*/}
                    {/*position={{ x: 200, y: 200 }}*/}
                    {/*onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}*/}
                    {/*onResize={(e, direction, ref, delta, position) => {*/}
                        {/*this.setState({*/}
                            {/*width: ref.style.width,*/}
                            {/*height: ref.style.height,*/}
                            {/*...position,*/}
                        {/*});*/}
                    {/*}}*/}
                {/*>*/}
                    {/*lkfjlsakfjalsdjalskjdalskjdlaskjdlaksjdlaksjdalskjdalskjdlaj*/}
                    {/*saldkasldkjasldkjasldjalsjd*/}
                {/*</Rnd>*/}

                {/*<Grid />*/}
                <div
                    style={{
                        width: '100%',
                        height: '400px',
                    }}
                >
                    <Rnd
                        default={{
                            x: 0,
                            y: 0,
                            width: '100%',
                            height: 190,
                        }}
                        onDragStop={(e, d) => { this.setState({ x: d.x, y: d.y }) }}
                        onResize={(e, direction, ref, delta, position) => {
                            this.setState({
                                width: ref.offsetWidth,
                                height: ref.offsetHeight,
                                ...position,
                            });
                        }}
                        maxWidth={'calc(100% - 10px)'}
                        // minHeight={190}
                        bounds="window"
                    >
                        <Grid />
                    </Rnd>
                </div>




            </div>

        );
    }
}

export default MyView;