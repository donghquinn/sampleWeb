import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setHasWindow(true);
    }
  }, []);

  return (
    <div className="flex flex-col content-center wrapper">
      <div className="flex justify-center player">
        {hasWindow && (
          <ReactPlayer
            className="player flex flex-col content-center"
            url="/videos/final.mp4"
            width="90%"
            height="90%"
            playing={true}
            muted={true}
            loop={true}
            controls={true}
          ></ReactPlayer>
        )}
      </div>
    </div>

    // <div className='flex flex-col'>
    // <video muted autoPlay loop>
    //   <source src='/videos/application.mp4'></source>
    // </video>
    // </div>
  );
};

export default VideoPlayer;
