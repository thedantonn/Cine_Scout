import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { addSearchedMovies } from "../Slice/searchGptSlice";

 const useSearchMovies = (movie) => {
    const dispatch = useDispatch()
    const getSearchedMovies = async() => {
        try{
        const data = await fetch ("https://api.themoviedb.org/3/search/movie?"+movie+"&include_adult=false&language=en-US&page=1", 
        API_OPTIONS);
        const json = await data.json()
        dispatch(addSearchedMovies(json.results))
        }catch(error){
            return
        }
    }
    useEffect(()=>{
        getSearchedMovies()
    },[])

 } 
 export default useSearchMovies