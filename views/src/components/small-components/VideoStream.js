import React, {useState} from 'react';
import axios from 'axios';

const VideoStream = () => {
    const [streaming, setStreaming] = useState(false);

  const startStreaming = async () => {
    try {
      await axios.get('http://localhost:8000/api/start_stream');
      setStreaming(true);
    } catch (error) {
      console.error('Error starting streaming:', error);
    }
  };

  const stopStreaming = async () => {
    try {
      await axios.get('http://localhost:8000/api/stop_stream');
      setStreaming(false);
    } catch (error) {
      console.error('Error stopping streaming:', error);
    }
  };

  return (
    <div>
      <div>
        {streaming ? (
          <button onClick={stopStreaming}>Stop Streaming</button>
        ) : (
          <button onClick={startStreaming}>Start Streaming</button>
        )}
      </div>
      <div>
        {streaming && (
          <img
            src="http://localhost:8000/api/live_feed"
            alt="Video"
          />
        )}
      </div>
    </div>
  );
}

export default VideoStream