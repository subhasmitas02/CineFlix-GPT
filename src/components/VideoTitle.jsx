import React from 'react'

const VideoTitle = ({ title, overview }) => {
  return (
    <div className='pt-36 px-12'>
        <h1 className='text-5xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/2'>{overview}</p>
        <div>
            <button className='bg-gray-500 p-3 px-10 mr-2 text-white font-bold bg-opacity-50 rounded-lg'>▶ Play</button>
            <button className='bg-gray-500 p-3 px-8 mx-2 text-white font-bold bg-opacity-50 rounded-lg'>More Info</button>
        </div>
    </div> 
  );
};

export default VideoTitle