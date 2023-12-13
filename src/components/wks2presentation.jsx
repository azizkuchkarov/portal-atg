import React from 'react'

const ResponsiveIframe = ({ link }) => {
  return (
    <div
      style={{
        position: 'relative',
        paddingBottom: '75%',
        height: 0,
        overflow: 'hidden',
      }}
    >
      <iframe
        src={link}
        frameBorder="0"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
      ></iframe>
    </div>
  )
}

export default ResponsiveIframe
