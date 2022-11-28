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
      url='/videos/application.mp4'
      width='90%'
      height='90%'
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