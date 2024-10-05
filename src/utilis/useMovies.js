import { useDispatch } from "react-redux";
import { API_OPTIONS } from "./constants";
import { addNowPlayinMovies } from "../components/moviesSlice";
import { useEffect } from "react";

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