import React from 'react';

const VideoCom = ({link}) => {
  return (
    <div className="my-8 xl:max-w-none">

    <div className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden" style={{ paddingTop: '56.25%' }}>
    <iframe
  className="embed-responsive-item absolute bottom-0 left-0 right-0 top-0 h-full w-full"
  src={link} title="YouTube video player"
  allowFullScreen=""
  data-gtm-yt-inspected-2340190_699="true"
  id="240632615"
    ></iframe>
    </div>
    </div>
  );
};

export default VideoCom;

