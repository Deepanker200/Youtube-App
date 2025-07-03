import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");

  
  useEffect(() => {
    //API Call
    console.log(searchQuery);
  }, [searchQuery])

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-cols-12 p-5 shadow-lg'>
      <div className='flex col-span-2 '>
        <img
          onClick={() => toggleMenuHandler()}
          className="h-8 cursor-pointer"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' />
        <a href='/'>
          <img
            className="h-8 ml-3"
            src='src/assets/img/yt-logo.jpg' />
        </a>
      </div>
      <div className='col-span-9 px-10 flex justify-center'>
        <input
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className='w-3/4 border border-gray-400 px-2 rounded-s-full' type='text' />
        <button className='bg-gray-100 border border-gray-400 px-5 py-2 rounded-e-full'>🔍</button>
      </div>
      <div className='col-span-1'>
        <img className="h-8" src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
      </div>
    </div>
  )
}

export default Head