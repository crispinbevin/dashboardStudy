import React from 'react'
import './Navbar.css'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart, FaRocket, FaDollarSign, FaChartBar } from "react-icons/fa";

function Navbar() {
  const location = useLocation();
  return (
    <div className="navbar-section">
      <div className="nav-wrapper fixed top-0 left-0 h-screen w-64 flex flex-col justify-between align-middle">
        <div className="nav-content">
          <div className="logo text-white w-12 ml-4 my-4">
            <img src="https://ecme-react.themenate.net/img/logo/logo-dark-streamline.png" alt="logo" />
          </div>

          <ul className='flex flex-col text-zinc-500 gap-5 relative right-3 ml-2'>
            <li><Link to='/ecommerce' className=''><FaShoppingCart  className='w-6 h-auto'/></Link></li>
            <li><Link to='/'><FaRocket  className='w-6 h-auto'/></Link></li>
            <li><Link to='/market'><FaDollarSign  className='w-6 h-auto'/></Link></li>
            <li><Link to='/'><FaChartBar  className='w-6 h-auto'/></Link></li>
          </ul>

        </div>
        <div className="nav-footer my-3 mx-3">
          <Link to='/'>Logout</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar