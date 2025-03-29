import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const getMovieVideos = async () => {
        const TMDB_API_KEY = import.meta.env.VITE_FIREBASE_TMDB_API_KEY;
        const data = await fetch(`https://api.themoviedb.org/3/movie/`+ movieId +`/videos?language=en-US&api_key=${TMDB_API_KEY }`);
        const json = await data.json();
        

        const filterData= json.results.filter((video) => video.type == "Trailer"); 
        const trailer = filterData.length ? filterData[0] : json.results[0];
        
        dispatch(addTrailerVideo(trailer));
    };

    
    useEffect(() => {
        getMovieVideos();
    }, []);
};

export default useMovieTrailer;