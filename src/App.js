import * as React from 'react'
import * as ReactDOM from 'react-dom'
import videosList from './constants.js';
import getVideoIdFromPageUrl from './utilities.js';
// Import VideoPlayer.js file here and render it the screen
import VideoPlayer from './VideoPlayer.js';

// Comment out the below line and replace Component with your imported component 
ReactDOM.render(
  <VideoPlayer/>, 
  document.getElementById('root')
);