import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import MyContext from '../utilis/searchTextContext';
import { GOOGLE_API_KEY, SEARCH_URL } from '../utilis/contants';
import Shimmar from './Shimmar';
import Sidebar from './Sidebar';
import SearchVideoCard from './SearchVideoCard ';


const SearchVideoContainer  = () => {
  
const [searchVideo,setSearchVideo] = useState([]);
const params = useParams();
// const {text,setText} = useContext(MyContext)
  
const getSearchVideo = async () => {
  const data = await fetch(SEARCH_URL+params.searchTerm+"&type=video&key="+GOOGLE_API_KEY)
  const json = await data.json()
  //console.log(json)

  setSearchVideo(json.items)
}

useEffect(()=>{
  getSearchVideo();

},[params.searchTerm]);

if(!searchVideo) return null
  return (searchVideo.length ===0)? (<Shimmar/>): (
    <div className='flex'>
      <Sidebar/>
      <div className=' flex w-full flex-wrap md:ml-8'>
  
      {
        searchVideo.map((searchVideo)=>(
          <Link key={searchVideo.id.videoId} to={"/watch?v="+searchVideo.id.videoId}>
            <SearchVideoCard info={searchVideo}/>
          </Link>
        ))
      }
      </div>
     </div>
  )
}

export default SearchVideoContainer 