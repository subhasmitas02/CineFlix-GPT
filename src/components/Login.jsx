import React, { useState } from 'react'
import Header from './Header'
import NetflixBackgroundImg from '../assets/Netflix_background_large.jpg'

const Login = () => {
  // for toggling feature
  const [isSignUp, setIsSignUp] =useState();   //initially setting as true, like the user has already signed up he can directly sign in.

  function handleClick(){
    event.preventDefault();  // Prevent the form from submitting
    setIsSignUp(!isSignUp);  //it will toggle
  }

  return (
    <div>

      <Header/>
      <div className='absolute'>
        <img src={NetflixBackgroundImg} alt='netflix bg image'></img>
      </div>

      <div className='relative flex'>

        <form className=' px-14 py-12 my-22 mx-136 bg-black/80 w-7/12 h-auto rounded-md flex flex-col'>
          <h1 className='font-bold text-white text-4xl mb-4 mt-1 text-left'>{isSignUp ? "Sign In" : "Sign Up"}</h1>
          <div className='flex flex-col justify-center items-center'>

          {isSignUp ? "" : <input type='email' placeholder='Full Name' className='p-4 mt-4 mx-1.8 w-full border-gray-400 border-1 rounded-md z-2 text-white cursor-text'></input>}
          <input type='email' placeholder='Enter Email' className='p-4 mt-4 mx-1.8 w-full border-gray-400 border-1 rounded-md z-2 text-white cursor-text'></input>
          <input type='password' placeholder='Password' className='p-4 my-4 mx-1.8 w-full border-gray-400 border-1 rounded-md  z-2 text-white cursor-text'></input>
          <button className='p-2 w-full text-white bg-red-600 h-10 rounded-md text-center z-2 cursor-pointer hover:bg-red-700' onClick={handleClick}>{isSignUp ? "Sign In" : "Sign Up"}</button>

          {!isSignUp ? ("") : (
            <>
              <p className='my-4 text-gray-300'>OR</p>
              <button className='p-2 w-full h-10 cursor-pointer rounded-md text-white bg-gray-700/80 hover:bg-gray-700/60'>Use a sign-in code</button>
              <a href='https://www.netflix.com/in/LoginHelp'><p className='my-4 text-white hover:underline hover:text-gray-400'>Forgot Password ?</p></a>
            </>  
          )}

          {/*adding Check box------*/}
          <label class="flex items-center space-x-2 -ml-47 my-3">
            <input type="checkbox" class="form-checkbox h-4 w-4 text-black cursor-pointer" />
            <span className='text-white '>Remember Me</span>
          </label>

          {isSignUp ?
            <p className='my-2 text-gray-400 -ml-28'>New to Netflix? <span className='text-white hover:underline cursor-pointer' onClick={handleClick}>Sign Up Now</span></p> : <p className='my-2 text-gray-400 -ml-28'>Already an User? <span className='text-white hover:underline cursor-pointer' onClick={handleClick}>Sign In Now</span></p>}
          

          {/* <p className='my-4 ml-0.4 text-wrap text-xs text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className='text-blue-500 text-sm hover:underline'>Learn More</span></p> */}

          </div>
        </form>
      </div>
      
    </div>
  )
}

export default Login