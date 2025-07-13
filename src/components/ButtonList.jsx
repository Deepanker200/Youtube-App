import React from 'react'
import Button from './Button'

const ButtonList = () => {

  

  const list = ["All", "Music", "WWE", "JavaScript", "Gaming", "Movies", "Ghost Stories", "Cricket", "Coding", "E-sports", "Songs"]


  
  return (
    <div className='flex justify-around mt-24 overflow-x-scroll whitespace-nowrap md:w-full w-[22rem]' >
      {
        list.map((name, index) => <Button key={index} name={name} />)
      }

    </div>
  )
}

export default ButtonList