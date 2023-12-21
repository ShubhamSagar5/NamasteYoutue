import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import MyContext from '../utilis/searchTextContext'

const Button = ({name}) => {

  const {text,setText} = useContext(MyContext)
  const navigate = useNavigate()
  return (
    <div>
        <button className='m-2 px-5 py-2 bg-gray-200 rounded-lg ' onClick={(e)=>{
          const searchTerm = name;
          setText(searchTerm)
          navigate(`/search/${searchTerm}`)
        }}>{name}</button>
    </div>
  )
}

export default Button