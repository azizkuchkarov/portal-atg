import React from 'react';

const VideoBackground = () => {
  const VideoLink = 'https://ik.imagekit.io/ATG/evergreen-globe1920x800-10sec_bt3.mp4?updatedAt=1686820831114'

  return (
    <video autoPlay muted loop playsInline>
      <source src={VideoLink} type="video/mp4" />
      {/* Your browser does not  support the video tag. */}
    </video>
  );
};

export default VideoBackground;
