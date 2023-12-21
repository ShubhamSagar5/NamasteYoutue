import React, { useEffect, useState } from 'react'
import { VIDEO_INFO_API_URL } from '../utilis/contants'
import VideoDeatilinfo from './VideoDeatilinfo'
import Shimmar from './Shimmar'

const VideoDetailContainer = ({params}) => {
  
    const [videoDeatil,setVideoDeatil] = useState("")

    const getDeatil = async () =>{
        const data = await fetch(VIDEO_INFO_API_URL+params.get("v"))
        const json = await data.json()
        setVideoDeatil(json.items)
    }


useEffect(()=>{
    getDeatil()
},[params])

    return (
    <div>
        {videoDeatil ? <VideoDeatilinfo info={videoDeatil} params={params}/>:(<Shimmar/>)}
    </div>
  )
}

export default VideoDetailContainer