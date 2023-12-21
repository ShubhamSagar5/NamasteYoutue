import React from 'react'

export const ChatMessage = ({name,message}) => {
  return (
    <div className='flex items-center shadow-sm mt-1'>
        <img
          className="h-8 cursor-pointer"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          alt="usericon"
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}
