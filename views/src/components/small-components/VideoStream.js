import React from 'react';

const VideoStream = () => {
    return(
        <div>
           <img
            src="http://localhost:8000/api/live_feed"
            alt="Video"
           />
        </div>
    );
}

export default VideoStream