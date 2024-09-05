import React from 'react';
import './BackgroundVideo.css'; // Import CSS file for styling

const BackgroundVideo = () => {
  return (
    <div className="background-video">
      <video autoPlay loop muted playsInline>
        <source src="C:\Users\hp\aspcrud-frontend\src\Video\back-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* You can add additional content or overlays here */}
    </div>
  );
};

export default BackgroundVideo;
