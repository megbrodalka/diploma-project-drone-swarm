
import React from 'react'
import VideoStream from "../small-components/VideoStream";

const LiveFeed = () => {
    return (
        <div className="flex-col justify-center items-center">
            <h1>Live Feed</h1>
            <VideoStream/>
        </div>
    );
}

export default LiveFeed