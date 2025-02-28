import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import Login from './pages/Login.jsx'
import Ecommerce from './pages/Ecommerce.jsx'
import Testing from './pages/Testing.jsx'

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
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={route} />
  </StrictMode>,
)
