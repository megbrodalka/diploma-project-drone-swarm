import React from 'react'
import VideoStream from "../small-components/VideoStream";
import Controls from "../small-components/Controls";

const Missions = () => {
    return (
        <div className="m-8 lg:w-3/5 mx-auto px-10">
            <div className="flex justify-between">
                <h1 className="font-semibold text-xl text-gray-600 dark:text-white mb-4">Missions</h1>

                <Controls/>
            </div>


            <VideoStream/>
        </div>
    );
}

export default Missions