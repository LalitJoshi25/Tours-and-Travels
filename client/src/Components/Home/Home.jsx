import React from 'react'

// imported Assets =========>
import aeroplane from '../../assets/takeoff.png';
import video from '../../assets/video.mp4';

const Home = () => {
  return (
    <div className='home flex container'>

      <div className="mainText">
        <h1>Create Ever-lasting Memories with US</h1>
      </div>

      <div className="homeImages flex">

        <div className="videoDiv">
          <video src={video} autoPlay muted loop className='video'></video>
        </div>

        <img src={aeroplane} className='plane'/>
      </div>
    </div>
  )
}

export default Home
