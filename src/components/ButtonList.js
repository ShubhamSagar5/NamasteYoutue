import React from 'react'
import Button from './Button'

const ButtonList = () => {
  
  const btnList = ["All","Gaming","Songs","Live","Cricket","Movies","Socker","News","Cooking","All","Gaming","Songs","Live","Cricket","Movies","Socker","News","Cooking"]
  
  return (
    <div className='flex w-[99%] overflow-x-scroll no-scrollbar'>
  
      {
        btnList?.map((item,index) => {
        return <Button key={index} name={item}/>
        })
      }


      
      




    </div>
  )
}

export default ButtonList