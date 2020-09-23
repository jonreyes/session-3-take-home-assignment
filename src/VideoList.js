import * as React from 'react';
import * as PropTypes from 'prop-types';
import VideoButton from './VideoButton.js';

class VideoList extends React.Component {
    static propTypes = {
        videos: PropTypes.arrayOf(
            PropTypes.shape({
                title: PropTypes.string.isRequired,
                description: PropTypes.string.isRequired,
                url: PropTypes.string.isRequired,
                img: PropTypes.string.isRequired,
            })
        ).isRequired,
        selectedVideoIndex: PropTypes.number.isRequired,
    };

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

                        return (
                            <VideoButton
                                key={`${id}-${index}`}
                                videoTitle={title}
                                videoImage={img}
                                videoDescription={description}
                                index={index}
                                isSelected={isSelected}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default VideoList;

