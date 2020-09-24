import * as React from 'react';
import getVideoIdFromPageUrl from './utilities.js';
import videosList from "./constants.js";
import VideoList from './VideoList.js'

class VideoPlayer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          selected: 0
        };
    }

    select = (s)=>{
      this.setState({selected:s})
      console.log(this.state.selected);
    };

    render() {
        var videos = videosList;
        var id = getVideoIdFromPageUrl(videos[this.state.selected].url);
        var rootClassName = 'container-section';

        return (
            <div className={rootClassName}>
                <div className="main-section">
                    <iframe
                        className="video-player"
                        title="Video Player"
                        src={`https://player.vimeo.com/video/${id}?portrait=0`}
                        width="1000"
                        height="348"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                </div>
                <VideoList
                        videos={videos}
                        selectedVideoIndex={0}
                        select={this.select}
                />
            </div>
        );
    }
}

// Export VideoPlayer here - Refer to the hands-on exercises taught in the class

export default VideoPlayer;