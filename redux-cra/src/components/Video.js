import React, { Component } from "react";
import YouTube from 'react-youtube';

class Video extends Component {
    constructor(props) {
        super(props);

        this.state = {
            info: null
        };

        this.state.info = this.props.info;
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }

    render() {
        const opts = {
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                // autoplay: 1
            }
        };

        return (
            <div>
                <YouTube
                    videoId={this.state.info}
                    opts={opts}
                    onReady={this._onReady}
                />
            </div>
        );
    }
}

export default Video;