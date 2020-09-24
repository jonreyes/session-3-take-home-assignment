import * as React from 'react';
import VideoButton from './VideoButton.js';
import getVideoIdFromPageUrl from './utilities.js';

class VideoList extends React.Component {
    constructor(props){
      super(props);
    }

    render() {
        let {
          videos,
          selectedVideoIndex
          } = this.props; 
        //console.log(videos);   
        return (
            <div className="video-list">
            {
              videos.map(
              ({title,description,img,url},index)=>{
                const id = getVideoIdFromPageUrl(url);
                var isSelected = index === selectedVideoIndex;
                return(
                  <VideoButton
                  key={id}
                  select={this.props.select}
                  videoTitle={title}
                  videoImage={img}
                  videoDescription={description}
                  index={index}
                  isSelected={isSelected}
                  />
                );
                }
              )
            }
            </div>
        );
    }
}

// Export VideoList here
export default VideoList;
