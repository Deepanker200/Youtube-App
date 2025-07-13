import { Outlet } from 'react-router-dom'
import MainContainer from './MainContainer'
import Sidebar from './Sidebar'
import WatchPage from './WatchPage'
import Head from './Head'


const Body = () => {
  return (
    <div className='flex'>
      <Head />
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Body