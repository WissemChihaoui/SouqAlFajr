import React, { useRef, useState } from 'react';
import {Carousel} from 'react-responsive-carousel'
import onion from "../../assets/img/onion.jpg";
import onion2 from "../../assets/img/onion2.jpg";
import onion3 from "../../assets/img/onion3.jpg";
import video1 from "../../assets/video/video.mp4"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './carousel.css'
const CarouselImages = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };
    const images = [onion, onion2, onion3];
    const videos = [video1]
  return (
    <div className='modalPicture'>
        <div className="pictures">

        <Carousel showThumbs={false} infiniteLoop autoPlay={!isPlaying} transitionTime={1500} showStatus={false}>
            
          {images.map((image) => (
            <>
            
            <img
                src={image}
                alt={`Image`}
            />
            <div className="productBadge availableProduct">Available</div>
            </>
            ))}
          {videos.map((video) => (
            <>
            
            <video
                src={video}
                alt={`video`}
                controls
                onPlay={handlePlay}
                onPause={handlePause}
                ref={videoRef}
            />
            <div className="productBadge availableProduct">Available</div>
            </>
            ))}
            
        </Carousel>
        
        </div>
    </div>
  )
}

export default CarouselImages