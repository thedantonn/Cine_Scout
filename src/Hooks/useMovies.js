import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { addNowPlayinMovies } from "../Slice/moviesSlice";

 const useMovies = () => {
    const dispatch = useDispatch()
    const getNowPlayingMovies = async() => {
        const data = await fetch ('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', 
        API_OPTIONS);
        const json = await data.json()
        dispatch(addNowPlayinMovies(json.results))
        console.log(json.results)
    }
    useEffect(()=>{
        getNowPlayingMovies()
    },[])

 } 
 export default useMovies