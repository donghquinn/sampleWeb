import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';




const VideoPlayer = () => {
  const [hasWindow, setHasWindow] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setHasWindow(true);
    }
  }, []);

  return (

    <div className='wrapper'>

    <div className='player'>{hasWindow &&
      <ReactPlayer 
      className="player"
      src='/videos/application.mp4'
      width='100%'
      height='100%'
      playing={true}
      muted={true}
      loop={true}
    ></ReactPlayer>}
       
        </div>
    
    </div>

    // <div className='flex flex-col'>
    // <video muted autoPlay loop>
    //   <source src='/videos/application.mp4'></source>
    // </video>
    // </div>
  )
}

  


export default VideoPlayer;