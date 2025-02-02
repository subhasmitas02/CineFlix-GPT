import React from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'

const Header = () => {
  return (
    <div className='absolute z-4 px-8 py-2 bg-gradient-to-b from-black'>  {/* by the abolute style netflix logo came on top of the background*/}
        <img className='w-44' src={netflixLogo}></img>
    </div>
  )
}

export default Header