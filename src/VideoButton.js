import * as React from 'react';

class VideoButton extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
      // Get the required props to be used in this component
        let video = this.props;
        var buttonClassName = 'video';
        let isSelected = video.isSelected;
        if (isSelected) {
            buttonClassName = 'video selected';
        }
      // Make sure you pass the right prop values in the blanks provided

        return (
            <div
                className={buttonClassName}
                onClick={()=>{video.select(video.index)}}
            >
                <img src={video.videoImage} alt="" className="video-image" />
                    <div className="description">
                        <h4>{video.videoTitle}</h4>
                        <p>{video.videoDescription}</p>
                    </div>
            </div>
        );
    }
}

// Export VideoButton here
export default VideoButton;
