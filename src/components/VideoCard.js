import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info)


const {snippet,statistics} = info
const {channelTitle,thumbnails,title} = snippet

const viewNumber = parseInt(statistics.viewCount);
const viewCount = (viewNumber) => {
  if (viewNumber < 1000) {
    return viewNumber.toString();
  } else if (viewNumber >= 1000 && viewNumber < 1000000) {
    return (viewNumber / 1000).toFixed(1) + "K";
  } else if (viewNumber >= 1000000 && viewNumber < 1000000000) {
    return (viewNumber / 1000000).toFixed(1) + "M";
  } else if (viewNumber >= 1000000000 && viewNumber < 1000000000000) {
    return (viewNumber / 1000000000).toFixed(1) + "B";
  }
};

    return (
    <div className=' p-2 m-1 md:m-3 w-[250px] md:w-72  shadow-lg'>
    <img className=' rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
    <ul>
        <li className=' font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{viewCount(viewNumber)} views</li>
    </ul>
    </div>
  )
}

export default VideoCard;