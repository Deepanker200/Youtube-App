import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { YOUTUBE_SEARCH_API, GOOGLE_API_KEY } from '../utils/constants';
import { Link } from 'react-router-dom';

const Head = () => {

  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);


  const searchCache = useSelector((store) => store.search);
  const dispatch_new = useDispatch();

  useEffect(() => {
    //API Call
    // console.log(searchQuery);

    //make an api call after every key press
    //but if the difference between 2 API calls is <200ms
    //decline the API call

    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
          console.log("Using cached data for:", searchQuery);

        setSuggestions(searchCache[searchQuery]);
      }
      else {
          console.log("Fetching new data for:", searchQuery);

        getSearchSuggestions()
      }
    }, 200);


    return () => {
      clearTimeout(timer);
    }
  }, [searchQuery])


  const getSearchSuggestions = async () => {
    // console.log("API call: ", searchQuery);

    // const data = await fetch(YOUTUBE_SEARCH_API + searchQuery + GOOGLE_API_KEY);
    const url = `${YOUTUBE_SEARCH_API}${encodeURIComponent(searchQuery)}&key=${GOOGLE_API_KEY}`;
    const data = await fetch(url);
    const json = await data.json();
    console.log(json);
    setSuggestions(json.items)
    console.log(suggestions);



    //update cache
    dispatch_new(cacheResults({
      // [searchQuery]: json.[1]       //Dynamically creating an object
      [searchQuery]: json.items       //Dynamically creating an object
    }))

  }

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  }

  return (
    <div className='grid grid-cols-12 py-3 px-2 md:p-5 shadow-lg fixed w-full bg-white z-30'>
      <div className='flex col-span-3 md:col-span-2 '>
        <img
          onClick={() => toggleMenuHandler()}
          className="h-6 md:h-8 cursor-pointer"
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' />
        <a href='/'>
          <img
            className="h-6 md:h-8 ml-3"
            src='src/assets/img/yt-logo.jpg' />
        </a>
      </div>
      <div className='col-span-8 md:col-span-9 px-5 pe-0 md:px-10'>
        <div className='flex'>
          <input
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 2000)}
            className='w-3/4 md:w-3/4 h-6 md:h-10 border border-gray-400 px-2 px md:py-2 rounded-s-full' type='text' />
          <button className='bg-gray-100 h-6 md:h-10 border border-gray-400 px-4 md:px-5 md:py-2 rounded-e-full'>
            🔍
          </button>
        </div>
        {showSuggestions && Array.isArray(suggestions) && suggestions.length > 0 && (
          <div className='absolute bg-white py-2 px-2 w-[200px] md:w-[48rem] shadow-lg rounded-lg border border-gray-100'>
            <ul className='text-[10px] md:text-lg'>
              {suggestions.map((s) => {
                // console.log("S here: ",s.kind.id.videoId);

                return <li key={s.id.videoId} className='py-1 px-2 md:py-2 md:px-3 shadow-sm hover:bg-gray-100'>
                  <Link to={`/watch?v=${s.id.videoId}`}>
                    🔍 {s.snippet.title}
                  </Link>
                </li>
              })}
            </ul>
          </div>)}
      </div>
      <div className='col-span-1 flex justify-end'>
        <img className="h-6 md:h-8" src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
      </div>
    </div>
  )
}

export default Head