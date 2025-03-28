import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';



const Browse = () => {
  
  useNowPlayingMovies();
  
  return (
    <div>
        <Header/>
        <MainContainer/>
        <SecondaryContainer/>
        {/*
            -Main Container
              -Video background
              -Vieo Title
            -Secondary Container
              -MovieLists * N
                -MovieCards * N
         */}
        
       
    </div>
  )
}

export default Browse