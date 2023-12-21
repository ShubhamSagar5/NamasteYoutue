import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainConatiner = () => {
  return (
    <div className='w-full md:w-10/12'>
        <ButtonList/>
        <VideoContainer/>
    </div>
  )
}

export default MainConatiner