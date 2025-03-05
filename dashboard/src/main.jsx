import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './pages/Login.jsx'
import Ecommerce from './pages/Ecommerce.jsx'
import Testing from './pages/Testing.jsx'
import Market from './pages/Market.jsx'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/ecommerce',
    element: <Ecommerce />
  },
  {
    path: '/testing',
    element: <Testing />
  },
  {
    path: '/market',
    element: <Market />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
