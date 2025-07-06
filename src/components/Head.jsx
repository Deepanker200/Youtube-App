import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const searchCache=useSelector((store)=>store.search);
  const dispatch_new=useDispatch();

  useEffect(() => {
    //API Call
    console.log(searchQuery);

    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      else {
        getSearchSuggestions()
      }
    }, 200);


    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])


  const getSearchSuggestions = async () => {
    console.log("API call: ", searchQuery);

    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json[1]);
    setSuggestions(json[1])


    //update cache
    dispatch_new(cacheResults({
      [searchQuery]:json[1]       //Dynamically creating an object
    }))

  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-cols-12 p-5 shadow-lg fixed w-full bg-white'>
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
      <div className='col-span-9 px-10'>
        <div>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            className='w-3/4 border border-gray-400 px-2 py-2 rounded-s-full' type='text' />
          <button className='bg-gray-100 border border-gray-400 px-5 py-2 rounded-e-full'>
            🔍
          </button>
        </div>
        {showSuggestions && <div className='absolute bg-white py-2 px-2 w-[48rem] shadow-lg rounded-lg border border-gray-100'>
          <ul>
            {suggestions.map((s) => (
              <li key={s} className='py-2 px-3 shadow-sm hover:bg-gray-100'>
                🔍{s}
              </li>
            ))}
          </ul>
        </div>}
      </div>
      <div className='col-span-1'>
        <img className="h-8" src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
      </div>
    </div>
  )
}

export default Head