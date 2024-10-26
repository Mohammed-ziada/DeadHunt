 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from  './pages/Cart'



let routers = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: '/cart', element: <Cart /> }
    ]
  }
])

function App() {


  return (
    <>

      <RouterProvider router={routers} />

    </>
  )
}

export default App
