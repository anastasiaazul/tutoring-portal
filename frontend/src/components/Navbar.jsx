import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo'

const Navbar = () => {
  return (
     

      <div className="bg-sky-900 h-[10vh] flex items-center border-b-2 border-b-black justify-between m-0 p-0">
        <div className="flex items-center">
             <img src="./assets/symbols2.png" className="inline mx-2"/>
            <p className="font-anton text-2xl font-extrabold">Portal</p>
        </div>
        <div className="flex gap-[2px]">
          <Link><button className="px-[20px] py-[5px]    rounded-full hover:bg-sky-400 ">About</button></Link>
          <Link to="/login" > <button className="px-[20px] py-[5px] bg-gray-950  mx-4 rounded-full hover:bg-sky-400 text-white">Log In</button></Link>
        </div>
    </div>
  )
}

export default Navbar
