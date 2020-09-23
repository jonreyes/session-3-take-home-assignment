import * as React from 'react';
import VideoButton from './VideoButton.js';

class VideoList extends React.Component {

    render() {
        var {
            videos,
            selectedVideoIndex,
        } = this.props;

        return (
            <div className="video-list">
                {
                    videos.map(({ id, title, description, img }, index) => {
                        var isSelected = index === selectedVideoIndex;
                        // Pass all the required props into VideoButton component
                        return (
                            <VideoButton
                                key={}
                                videoTitle={}
                                videoImage={}
                                videoDescription={}
                                index={}
                                isSelected={}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

// Export VideoList here

