import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const list=["All","Music","WWE","JavaScript","Gaming","Movies","Ghost Stories","Cricket","Coding"]

  return (
    <div className='flex flex-wrap justify-around'>
     {
      list.map((name,index)=><Button key={index} name={name}/>)
     }
      
    </div>
  )
}

export default ButtonList