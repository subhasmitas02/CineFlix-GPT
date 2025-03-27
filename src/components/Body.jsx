import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import DebugState from '../utils/DebugState';

const Body = () => {

    const AppRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login />
        },
        {
            path:'/browse',
            element:<Browse />
        }
    ]);
    
  

  return (
    <div>
        <DebugState /> {/* Debug Redux State */}
        <RouterProvider router={AppRouter} />
    </div>
  );
};

export default Body