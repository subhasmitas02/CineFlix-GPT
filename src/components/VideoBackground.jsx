import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/moviesSlice';

const VideoBackground = ({movieId}) => {
    
    const trailerVideo = useSelector(store => store.movies?.trailerVideo);
    const dispatch = useDispatch();

    //fetch trailer video
    const getMovieVideos = async () => {
        const TMDB_API_KEY = import.meta.env.VITE_FIREBASE_TMDB_API_KEY;
        const data = await fetch(`https://api.themoviedb.org/3/movie/1125899/videos?language=en-US&api_key=${TMDB_API_KEY }`);
        const json = await data.json();
        console.log(json);

        const filterData= json.results.filter((video) => video.type == "Trailer"); 
        const trailer = filterData.length ? filterData[0] : json.results[0];
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    };

    
    useEffect(() => {
        getMovieVideos();
    }, []);


  return (
    <div>
      <iframe 
        width="560" 
        height="315" 
        src={"https://www.youtube.com/embed/"+trailerVideo?.key}
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      ></iframe>
    </div>
  )
}

export default VideoBackground