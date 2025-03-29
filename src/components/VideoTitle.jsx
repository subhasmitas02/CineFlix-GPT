import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='bg-white hover:bg-white/80 p-3 px-10 mr-2 text-black font-bold rounded-lg '>Play</button>
            <button className='bg-gray-500/70 hover:bg-gray-500/50 p-3 px-8 mx-2 text-white font-bold  rounded-lg'>More Info</button>
        </div>
    </div> 
  );
};

export default VideoTitle