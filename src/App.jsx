import Head from './components/Head'
import Body from './components/Body'
import './index.css'
import { Provider } from 'react-redux'
import store from './utils/store'
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom'
import MainContainer from './components/MainContainer'
import WatchPage from './components/WatchPage'
import Demo from './components/Demo'
import Demo2 from './components/Demo2'

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <WatchPage />
    },
    {
      path: "demo",
      element: (
        <>
          <Demo />
          <Demo2 />
        </>
      )
    },
  ]
}])

function App() {

  return (
    <Provider store={store}>
      <>
        <RouterProvider router={appRouter} />
      </>
    </Provider>
  )
}

export default App
