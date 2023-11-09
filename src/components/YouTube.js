import React from 'react';

function YouTube({ height, width, videoId, autoplay, title }){
    return <iframe height={height} 
    width={width}
    title={title} 
    src={`https://www.youtube.com/embed/${videoId}?autoplay=${autoplay}`}
    style={{border: "none"}}
    />
}

export default YouTube;