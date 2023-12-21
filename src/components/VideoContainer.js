import React, { useEffect, useState } from 'react'
import { YOUTUBE_API_KEY } from '../utilis/contants'
import VideoCard from './VideoCard'
import { Link } from 'react-router-dom'
import Shimmar from './Shimmar'

const VideoContainer = () => {
  
  const [videos,setVideos] = useState([])
  const [nextPageToken,setNextPageToken] = useState("")

  const getVideos = async() => {
    const url = nextPageToken !== "" ? `${YOUTUBE_API_KEY}&pageToken=${nextPageToken}`: YOUTUBE_API_KEY
    const data = await fetch(url)
    const json = await data.json()
    // console.log(json)
    setNextPageToken(json?.nextPageToken)
    setVideos([...videos,...json.items])
  }


  useEffect(()=>{
    getVideos()
  },[])
  
  useEffect(()=>{
    window.addEventListener("scroll",infiniteScroll,true);
    return () => {
      window.removeEventListener("scroll",infiniteScroll,true);
    }
  },[nextPageToken])

  const infiniteScroll = ()=>{
    if(window.innerHeight+ Math.round(document.documentElement.scrollTop)>=document.documentElement.offsetHeight - 300){
      getVideos();
    }
  }
  

  if(!videos) return null

  return(videos.length ===0)?(<Shimmar/>) : (
    <div className='flex flex-wrap '>
    {
      videos?.map((video) => (
       <Link to={"/watch?v="+video.id}key={video.id}><VideoCard  info={video}/></Link> ) )
    }
       
    </div>
  )
}

export default VideoContainer