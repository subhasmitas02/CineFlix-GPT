import React from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'
import profileIcon from "../assets/profile-icon.png";
import { signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }
  return (
    <div className='absolute w-screen z-4 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>  {/* by the abolute style netflix logo came on top of the background*/}
        <img className='w-44' src={netflixLogo} alt="logo"></img>

        {user && (<div className='flex p-2'>
            <img className='w-10 h-10' src={profileIcon} alt="usericon"></img>
            <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header