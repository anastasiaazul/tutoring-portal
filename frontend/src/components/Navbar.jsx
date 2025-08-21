import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  const isLoggedIn = !!localStorage.getItem('token');

  return (
    <nav className="bg-sky-900 h-[10vh] flex items-center border-b-2 border-b-black justify-between px-8 overflow-visible">
      <Logo />
      <div className="flex items-center">
        {!isLoggedIn && (
          <Link to="/login">
            <button className="px-4 py-1 bg-white text-sky-900 font-semibold rounded shadow hover:bg-sky-100 transition text-base">
              Log In
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar