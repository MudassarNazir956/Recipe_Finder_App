import { Heart, Home } from 'lucide-react'
import React, { } from 'react'
import { Link, useLocation } from 'react-router-dom'
import mainImage from "../assests/logo.svg"
import mdScreenImage from "../assests/mobile-logo.svg"

const Sidebar = () => {

  const location = useLocation();

  return (
    <>
      {/* Desktop Sidebar */}

      <div className='p-3 md:p-10  border-r  border-r-slate-300 min-h-screen w-24 md:w-64 hidden sm:block'>
        <div className='flex flex-col gap-20 sticky top-10 left-0'>
          <div className='w-full'>
            <Link to="/">
              <img src={mainImage} alt="Main Image" className='hidden md:block' />
              <img src={mdScreenImage} alt="Medium Screen Image" className='block md:hidden' />
            </Link>
          </div>

          <ul className='flex flex-col items-center md:items-start gap-10'>
            <Link to={"/"} className='flex gap-2'>
              <Home size={"24"} className={`cursor-pointer ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-500'
                }`} />
              <span className='font-bold hidden md:block'>Home</span>
            </Link>

            <Link to={"/favorites"} className='flex gap-2'>
              <Heart size={"24"} className={`cursor-pointer ${location.pathname === '/favorites' ? 'text-red-600' : 'text-slate-500'
                }`} />
              <span className='font-bold hidden md:block'>Favorites</span>
            </Link>

          </ul>
        </div>
      </div>



      {/* Mobile Sidebar */}
      <div className="flex justify-evenly border-t border-t-slate-500 fixed w-full bottom-0 left-0 bg-white z-10 p-4 sm:hidden">
        <Link to="/">
          <Home
            size={30}
            className={`cursor-pointer ${location.pathname === '/' ? 'text-blue-600' : 'text-slate-500'
              }`}
          />
        </Link>

        <Link to="/favorites">
          <Heart
            size={30}
            className={`cursor-pointer ${location.pathname === '/favorites' ? 'text-red-600' : 'text-slate-500'
              }`}
          />
        </Link>
      </div>

    </>
  )
}

export default Sidebar