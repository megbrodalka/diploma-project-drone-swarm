import React from 'react'
import VideoStream from "../small-components/VideoStream";

const LiveFeed = () => {
    return (
        <div className="m-8 lg:w-3/5 mx-auto px-10">
            <h1 className="font-semibold text-xl text-gray-600 dark:text-white mb-4">Live Feed</h1>
            <VideoStream/>
        </div>
    );
}

export default LiveFeed