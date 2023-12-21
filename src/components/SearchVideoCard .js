import React from 'react'

const SearchVideoCard  = ({info}) => {
  
    const {snippet} = info;
    const{channelTitle, title, thumbnails} = snippet;

    return (
      <div className='p-2 m-1 md:m-2 shadow-lg w-[250px] md:w-72'>
        <img src={thumbnails.medium.url} alt="thumbnail" className="rounded-lg"/>
        <ul>
          <li className="font-bold py-2">{channelTitle}</li>
          <li >{title}</li>
        </ul>
  
      </div>
    )
}

export default SearchVideoCard