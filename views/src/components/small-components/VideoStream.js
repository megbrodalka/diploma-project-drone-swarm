import React, {useState} from 'react';
import axios from 'axios';

const port = "http://localhost:8000/api"

const VideoStream = () => {
    const [streaming, setStreaming] = useState(false);

    const startStreaming = async () => {
      try {
        await axios.get(`${port}/start_stream`);
        setStreaming(true);
      } catch (error) {
        console.error('Error starting streaming:', error);
      }
    };

    const stopStreaming = async () => {
      try {
        await axios.get(`${port}/stop_stream`);
        setStreaming(false);
      } catch (error) {
        console.error('Error stopping streaming:', error);
      }
    };

    const buttonStyle = "w-1/3 bg-blue-700 text-white p-1 mt-2 rounded-lg hover:bg-blue-800" +
        " dark:bg-blue-600 dark:hover:bg-blue-700";

    return (
      <div>
        <div className="border border-gray-300 w-full h-[500px] rounded-lg dark:border-gray-600">
          {streaming ? (
            <img className="object-cover w-full h-full" src="http://localhost:8000/api/live_feed" alt="Video" />
          ) : (
            <div className="flex justify-center items-center h-full">
              <h1 className="text-center text-gray-600 dark:text-white">Waiting for stream to start...</h1>
            </div>
          )}
        </div>

          <div className="flex justify-center mt-4">
              {streaming ? (
                <button className={buttonStyle} onClick={stopStreaming}>Stop Streaming</button>
              ) : (
                <button className={buttonStyle} onClick={startStreaming}>Start Streaming</button>
              )}
        </div>

      </div>
    );
}

export default VideoStream