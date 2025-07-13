import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

const Sidebar = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);
const dispatch=useDispatch();

  useEffect(() => {
    if (window.innerWidth < 768) {
        dispatch(closeMenu())
    }
  }, [])


  if (!isMenuOpen) return null;

  return (
    <div className='p-5 shadow-lg w-48 mt-12 md:mt-24 text-xs md:text-lg absolute md:static z-10 md:z-auto bg-white overflow-y-auto h-screen md:h-auto'>
      <ul className='gap-4 flex flex-col'>
        <li><Link to="/" >Home</Link></li>
        <li><Link to="/demo" >Demo</Link></li>

        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5 mb-5'>Subscriptions</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className='font-bold pt-5 mb-5'>Watch Later</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5 mb-5'>Watch Later</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5 mb-5'>Watch Later</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>


      <h1 className='font-bold pt-5 mb-5'>Watch Later</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5 mb-5'>Watch Later</h1>
      <ul className='gap-4 flex flex-col'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>


    </div>
  )
}

export default Sidebar