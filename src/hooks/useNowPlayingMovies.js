import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesSlice';


const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
      const TMDB_API_KEY = import.meta.env.VITE_FIREBASE_TMDB_API_KEY;
      
      const getNowPlayingMovies = async () => {
        try {
          const data = await fetch(`https://api.themoviedb.org/3/movie/now_playing?page=1&api_key=${TMDB_API_KEY }`);
          const json = await data.json();
          
          dispatch(addNowPlayingMovies(json.results));
          
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      
      };
    
      useEffect(() => {
        getNowPlayingMovies();
      },[]);
};

export default useNowPlayingMovies;