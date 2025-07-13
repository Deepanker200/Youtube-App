import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {
  const isMenuOpen = useSelector(store => store.app.isMenuOpen);


  


  return (
    <div className={'w-full' + (isMenuOpen && ' opacity-50 bg-slate-200 md:opacity-100 md:bg-white h-screen md:h-auto overflow-hidden')}>
      <ButtonList />     {/* prop drilling */}
      <div className={'flex-1' +(isMenuOpen ?  ' overflow-y-hidden max-h-screen pointer-events-none md:max-h-none md:overflow-auto md:pointer-events-auto' : ' pointer-events-auto')}>

        <VideoContainer />
      </div>
    </div>
  )
}

export default MainContainer