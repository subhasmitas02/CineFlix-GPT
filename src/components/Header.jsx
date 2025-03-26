import React, { useEffect } from 'react'
import netflixLogo from '../assets/Netflix_Logo_PMS.png'
import { PROFILE_ICON } from '../utils/constants';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../utils/Firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice'

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector(store => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {})
    .catch((error) => {
      // An error happened.
      navigate("/error");
    });
  };

  useEffect(() =>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const { uid, email, displayName, photoURL } = user;
            dispatch(addUser({uid:uid, email: email, displayName: displayName, photoURL: photoURL}));
            navigate("/browse");
        } else {
            // User is signed out
            dispatch(removeUser());
            navigate("/");
        }
    });
    
    //Unsubscribe when component unmounts
    return () => unsubscribe();
    
  }, []);

  return (
    <div className='absolute w-screen z-4 px-8 py-2 bg-gradient-to-b from-black flex justify-between'>  {/* by the abolute style netflix logo came on top of the background*/}
        <img className='w-44' src={netflixLogo} alt="logo"></img>

        {user && (<div className='flex p-2'>
            <img className='w-10 h-10' src ={PROFILE_ICON} alt="usericon"></img>
            <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
        </div>)}
    </div>
  )
}

export default Header